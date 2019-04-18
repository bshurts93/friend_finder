var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 8080;

var htmlRoutes = require('./app/routing/htmlRoutes');

// ...

app.use('/', htmlRoutes)



app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});