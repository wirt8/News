# Pyramus
## About
Reddit clone using React components and PostgresQL database.

*Special thanks to the `#postgresql` irc group for the immense help in my SQL!*

## Non-NPM Requirements
* PostgresQL

## Installation
Make sure to have postgresQL installed. On windows, don't forget to set up the PATH variable for `psql`.

1. `npm update`
2. `psql -U postgres -a -f server/psql_scripts.sql` to build PostgresQL schema
3. `npm run build` to build \*.bundle.js files.
4. `npm start
