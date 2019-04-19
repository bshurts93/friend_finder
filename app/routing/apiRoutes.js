var express = require("express");
var path = require("path");
var router = express.Router();
var friends = require("../data/friends");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/api/friends", function (req, res) {
    res.json(friends.friends);
});

router.post("/api/friends", function (req, res) {
    // Handle incoming survey results
    var survey = req.body;
    var name = survey.name;
    var imgLink = survey.image_link;
    var surveyNums = [];

    // Fill array with just scores
    for (var i = 1; i <= 10; i++) {
        currentQuestion = "question" + i;

        surveyNums.push(parseInt(survey[currentQuestion]));
    }

    // Determine compatibility
    for (var i = 0; i < friends.friends.length; i++) {
        var friendName = friends.friends[i].name;
        console.log(`Difference between ${name} and ${friendName}`);

        friends.getDiff(surveyNums, friends.friends[i].scores);
    }
});


module.exports = router;