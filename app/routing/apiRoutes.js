var express = require("express");
var path = require("path");
var router = express.Router();
var friends = require("../data/friends");

router.get("/api/friends", function (req, res) {
    res.json(friends.friends);
});

router.post("/api/friends", function (req, res) {
    // Handle incoming survey results


    // Determine compatibility
});


module.exports = router;