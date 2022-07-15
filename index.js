const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "socialmedia",
});

const userRoute = require('./routes/User')
app.use('', userRoute);
const postingRoute = require('./routes/Posting')
app.use('', postingRoute)

const PORT = 3001;

app.listen(process.env.PORT || PORT, (req, res) => {
    console.log("Server is running on port ${PORT}");
});