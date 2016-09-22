/**
 * Created by RFreeman on 9/21/2016.
 */
var message = 'Hello';

// make a public function that returns a message
exports.sayHello = function() {
    console.log(message);
}

// write a private function
var privateHello = function() {
    console.log(message);
}
