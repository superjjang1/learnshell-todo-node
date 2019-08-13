// Import the dotenv module.
//Call its `.config()` method
require('dotenv').config();

const pgp = require('pg-promise')();

const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
    
});
console.log('Yay, you did the thing, wow');

module.exports = db;