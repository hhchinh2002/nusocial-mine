const mysql = require("mysql");

const db = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "bae6fa97069006",
    password: "df383224",
    database: "heroku_ba28903f53f9368",
});

module.exports = db;