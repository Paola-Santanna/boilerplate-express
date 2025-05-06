let express = require('express');
let app = express();
const absolutePath = __dirname + '/views/index.html';
require('dotenv').config();
let response = "Hello json";

console.log("Hello World");

app.use("/public", express.static(__dirname + '/public'));

app.get('/root', (req, res) => {
    res.sendFile(absolutePath);
});

/*app.get("/json", (req, res) => {
    
    console.log(process.env.MESSAGE_STYLE === "uppercase")

    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello json".toUpperCase();
    } else {
        response = "Hello json";
    }

    res.json( {
        message: response
    });
  });*/

/*app.get("/json", (req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});*/

app.get("/now", function(req, res, next) {
    req.time =  new Date().toString();
    //console.log(req.time);
    next();
}, function(req, res){
    //console.log(req.time);
    res.json({
        time: req.time
    });
});

app.get("/:word/echo", (req, res) => {
    
    const { word } = req.params;

    res.json({
        echo: word
    });
});

app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;

    res.json({
        name: `${firstName} ${lastName}`
    });
});






























 module.exports = app;
