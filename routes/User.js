const express = require('express')
const router = express.Router()

const db = require('../config/db');

router.post("/register", (req, res) => {
    const username = req.body.regUsername;
    const password = req.body.regPassword;
    const email = req.body.regEmail;
    db.query(
        "INSERT INTO users (username, password, email) VALUES (?, ?, ?);", [username, password, email],
        (err, results) => {
            console.log(err);
            res.send(results);
        }
    );
});

router.post("/login", (req, res) => {
    const username = req.body.logUsername;
    const password = req.body.logPassword;
    db.query(
        "SELECT * FROM users WHERE username = ?", username,
        (err, results) => {
            if (err) {
                console.log(err);
            }
            if (results.length > 0) {
                if (password == results[0].password) {
                    res.json({ loggedIn: true, username: username });
                } else {
                    res.json({
                        loggedIn: false,
                        message: "Wrong username/password",
                    });
                }
            } else {
                res.json({ loggedIn: false, message: "username doesn't exist"});
            }
        }
    );
});

module.exports = router;