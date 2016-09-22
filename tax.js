/**
 * Created by RFreeman on 9/21/2016.
 */
// module ref's
var connect = require('connect');
var accounting = require('accounting');

// create new connect object
var app = connect();

/* create callback function
function accepts amount from url querystring
calculate tax & total
display all 3 values as currency
 */
var calculate = function(req, res, next) {
    // get subtotal from querystring e.g. "subtotal=100"
    var qs = req.parse(req.url, true).query;

    var subTotal = qs.subtotal;

    // calculate tax and total
    var tax = subTotal * 0.13;
    var total = subTotal + tax;

    // display all values as currency
    res.end('SubTotal: ' + subTotal + '\n'
            + 'Tax: ' + tax + '\n'
            + 'Total: ' + total);
};

app.use('/tax', calculate);

// listen
app.listen(3000);
