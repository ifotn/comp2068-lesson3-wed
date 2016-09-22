/**
 * Created by RFreeman on 9/21/2016.
 */
// link to connect to start our server
var connect = require('connect');

// link to node's url module
var url = require('url');
var accounting = require('accounting');

// create a new connect application object
var app = connect();

// set up a default response to GET
var helloWorld = function(req, res, next) {
    res.end('Hello world.  It is lesson 3 and nodemon is FINALLY running');
};

var goodbyeWorld = function(req, res, next) {
    res.end('Goodbye');
}

var everythingElse = function(req, res, next) {
    res.end('All other requests except hello and goodbye');

}

var calculate = function(req, res, next) {
    // get subtotal from querystring e.g. "subtotal=100"
    var qs = url.parse(req.url, true).query;

    var subTotal = qs.subtotal;

    // calculate tax and total
    var tax = subTotal * 0.13;
    var total = subTotal + tax;

    // display all values as currency
    res.end('SubTotal: ' + accounting.formatMoney(subTotal) + '\n'
        + 'Tax: ' + accounting.formatMoney(tax) + '\n'
        + 'Total: ' + accounting.formatMoney(total));
};

app.use('/tax', calculate);

// route requests to /hello to helloWorld function
app.use('/hello', helloWorld);

// route /goodbye to goodbyeWorld function
app.use('/goodbye', goodbyeWorld);

// route all other requests to everythingElse function - NEEDS TO BE LAST
app.use('/', everythingElse);

// listen for events on port 3000
app.listen(3000);

// print notice server is running
console.log('Connect running on port 3000');


