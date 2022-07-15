const express = require('express')
const router = express.Router()

const db = require('../config/db');

router.post("/posting", (req, res) => {
    const text = req.body.text;
    const author = req.body.author;
    const images = req.body.images;
    db.query(
        "INSERT INTO posts (text, author, images) VALUES (?, ?, ?);", [text, author, images],
        (err, results) => {
            console.log(err);
            res.send(results);
        }
    );
});

router.get("/posts", (req, res) => {
    db.query(
        "SELECT * FROM posts",
        (err, results) => {
            if (err) {
                console.log(err);
            }
            res.send(results);
        });
});

router.post("/likes", (req, res) => {
    const userLiking = req.body.userLiking;
    const postId = req.body.postId;
  
    db.query(
      "INSERT INTO likes (userLiking, postId) VALUES (?,?)",
      [userLiking, postId],
      (err, results) => {
        if (err) {
          console.log(err);
        }
        db.query(
          "UPDATE posts SET likes = likes + 1 WHERE id = ?",
          postId,
          (err2, results2) => {
            res.send(results);
          }
        );
      }
    );
});

module.exports = router;