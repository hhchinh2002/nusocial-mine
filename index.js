const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "be63cf0790b8a2",
    password: "a65f2952",
    database: "heroku_99140c5a2371a57",
});

const userRoute = require('./routes/User')
app.use('', userRoute);
const postingRoute = require('./routes/Posting')
app.use('', postingRoute)

const PORT = 3001;

app.listen(process.env.PORT || PORT, (req, res) => {
    console.log("Server is running on port " + PORT.toString());
});