'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}
function red(age) {
    console.log(s + ',' + 'I am ' + age);
}

module.exports = greet;
module.exports = red;

