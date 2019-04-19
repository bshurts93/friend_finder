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
    console.log(survey);

    for (var i = 1; i <= 10; i++) {
        currentQuestion = "question" + i;

        surveyNums.push(survey[currentQuestion]);
    }

    console.log((`Name: ${name}`));
    console.log((`Image Link: ${imgLink}`));
    console.log(surveyNums);



    // Determine compatibility
});


module.exports = router;