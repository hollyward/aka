var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var os = require("os");
var hostname = os.hostname();

// Using Express
var app = express();
const port = 3000


// View engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// Logging
var logger = function(req, res, next){
    console.log('Logging...');
    next();
}

app.use(logger);


// Process get requests
app.get('/', function(req, res){
    console.log(hostname);
    res.send(hostname);
    });
    
app.listen(3000, function(){
    console.log('Server Started on Port 3000');
})
