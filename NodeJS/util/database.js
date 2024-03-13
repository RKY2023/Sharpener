const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3308,
    database: 'node-complete',
    password: '2023'
});

module.exports = pool.promise();