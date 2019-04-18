var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/api/friends", function (req, res) {
    res.send("this is the api GET route");
});

router.post("/api/friends", function (req, res) {
    res.send("this is the api POST route");
});


module.exports = router;