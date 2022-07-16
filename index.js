const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "bae6fa97069006",
    password: "df383224",
    database: "heroku_ba28903f53f9368",
});

const userRoute = require('./routes/User')
app.use('', userRoute);
const postingRoute = require('./routes/Posting')
app.use('', postingRoute)

const PORT = process.env.PORT || 3001;

app.listen(PORT, (req, res) => {
    console.log("Server is running on port " + PORT);
});