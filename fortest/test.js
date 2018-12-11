var knex = require('knex')({
    client: 'postgres',
    // Uncomment to enable SQL query logging in console.
    // debug   : true,
    connection: {
        host    : '127.0.0.1',
        user    : 'postgres',
        password: '1111',
        database: 'pyramus',
        charset : 'utf8',
        timezone: 'UTC'
    }  
})
var query = 'select * from ??'
var queryVal = ['subpy']
knex.raw(query, queryVal).then( (results) => { 
    callback(results)
})


