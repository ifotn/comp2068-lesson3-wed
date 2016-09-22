/**
 * Created by RFreeman on 9/21/2016.
 */
// link to connect to start our server
var connect = require('connect');

// create a new connect application object
var app = connect();

// set up a default response to GET
var helloWorld = function(req, res, next) {
  res.end('Hello world.  It is lesson 3 and we just installed nodemon');
};

// route all requests to helloWorld
app.use(helloWorld);

// listen for events on port 3000
app.listen(3000);

// print notice server is running
console.log('Connect running on port 3000');
