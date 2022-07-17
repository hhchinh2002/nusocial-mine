const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'public')));

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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
  });

app.listen(PORT, (req, res) => {
    console.log("Server is running on port " + PORT);
});