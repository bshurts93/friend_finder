var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, '/public')));


var PORT = process.env.PORT || 8080;

var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require("./app/routing/apiRoutes");

// ...

app.use("/", htmlRoutes, apiRoutes);

app.post("/api/friends", function (req, res) {
    // Handle incoming survey results
    var survey = req.body;
    console.log("Response: " + survey);

    // Determine compatibility

});

app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});


