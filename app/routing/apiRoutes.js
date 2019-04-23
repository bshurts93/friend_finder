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
    var friendDiffs = [];

    // Fill array with just scores
    for (var i = 1; i <= 10; i++) {
        currentQuestion = "question" + i;

        surveyNums.push(parseInt(survey[currentQuestion]));
    }

    // Determine compatibility
    for (var i = 0; i < friends.friends.length; i++) {
        var friendName = friends.friends[i].name;
        var currentDiff = friends.getDiff(surveyNums, friends.friends[i].scores);
        var arrObj = {
            friend: friendName,
            difference: currentDiff
        }
        friendDiffs.push(arrObj);
    }

    console.log(friendDiffs);
    // Get lowest diff and select that person
    var lowestDiffNum = friendDiffs.reduce((min, obj) => obj.difference < min ? obj.difference : min, friendDiffs[0].difference);
    var lowestDiffName = "";
    console.log(lowestDiffNum);
    for (var i = 0; i < friendDiffs.length; i++) {
        if (friendDiffs[i].difference === lowestDiffNum) {
            lowestDiffName = friendDiffs[i].friend;
        }
    }
    console.log(lowestDiffName);
    var match = {
        name: lowestDiffName,
        num: lowestDiffNum
    };
    res.send(match);

});

module.exports = router;