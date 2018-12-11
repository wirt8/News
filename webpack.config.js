var webpack = require('webpack');
var config = require('./config');
var path = require('path');

module.exports = {
    externals: {
        'react': 'React'
    },
    entry: {
        CommentThreadApp: './client/CommentThreadApp.jsx',
        PostsApp: './client/PostsApp.jsx',
        SubpyFiller: './client/SubpyFiller.jsx',
        vendors: ['react']
    },
    output: {
        path: __dirname + '/client/build',
        publicPath: 'http://localhost:9090/assets/',
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
        chunks: 'all'
        }
    },
    module: {
        rules: [
            { test: /\.jsx$/, loaders: ['jsx-loader'] }
        ]
    },
    devServer: {
        port: config.webpackServerPort
    }
};
