// SETUP
var express  = require('express');
var mongoose = require('mongoose');

var app = express();
var port = 3000; //process.env.PORT || 8080;

// ROUTES
var router = express.Router();

// route middleware that will happen on every request,
// this must be defined before the routes to be executed first
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next(); 
});

// route middleware to validate :name
router.param('name', function(req, res, next, name) {
    // do validation on name here
    // blah blah validation
    // log something so we know its working
    console.log('doing name validations on ' + name);

    // once validation is done save the new item in the req
    req.name = name;
    // go to the next thing
    next(); 
});

router.get('/',function(req,res) {
	res.send('home page route \n');
})

router.get('/about', function(req, res) {
    res.send('my testing api \n');  
});

// route with parameters (http://localhost:8080/hello/:name)
router.get('/hello/:name', function(req, res) {
    res.send('hello ' + req.params.name + '!');
});

app.use('/api',router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
