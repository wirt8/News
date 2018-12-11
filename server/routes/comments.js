var express = require('express');
var config = require('../../config');
var router = express.Router();
var Model = require('../model.js');

router.get('/:postId', function(req, res, next) {
    var postId = req.params.postId;

    var userId;
    if (req.user) {
        userId = req.user.id;
    } else {
        userId = null;
    }

    Model.getComments(userId, postId, function(rows) {
        res.send(rows);
    });
});

router.post('/reply/:postId', function(req, res, next) {
    var user = req.user;
    var parent_id = req.body.parent_id;
    var message = req.body.message;

    if (!parent_id) {
        parent_id = null;
    }

    if (user === undefined) {
        res.status(400);
        res.send('Must login before posting a comment');
    } else {
        Model.postComment(user.username, req.params.postId, message, parent_id, function(err) {
            if (!err) {
                res.status(200);
                res.send('Successfully posted comment!');
            } else {
                res.status(500);
                res.send('Error inserting new comment in server');
            }
        });
    }
});

router.post('/upvote/:commentId', function(req, res, next) {
    var user = req.user;

    if (!user) {
        res.status(400);
        res.send('Cannot upvote when not logged in!');
    } else {
        Model.commentUpvote(user.id, req.params.commentId, function() {
            res.status(200);
        });
    }
});

router.post('/remove-upvote/:commentId', function(req, res, next) {
    var user = req.user;

    if (!user) {
        res.status(400);
        res.send('Cannot remove upvote when not logged in!');
    } else {
        Model.removeCommentUpvote(user.id, req.params.commentId, function() {
            res.send('Upvoted comment');
        });
    }
});

module.exports = router;
