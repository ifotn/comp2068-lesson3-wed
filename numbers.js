/**
 * Created by RFreeman on 9/21/2016.
 */
// link to the accounting npm package we just installed
var accounting = require('accounting');

    // set a numeric variable
var subTotal = 9.99;

// format the subTotal as currency
subTotal = accounting.formatMoney(subTotal);

// output the variable
console.log(subTotal);

