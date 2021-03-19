var num = 10;
alert(num.toExponential(1));   // "1.0e+1"


// ------- p187
var num = 99;
alert(num.toPrecision(1));  // "1e+2"
alert(num.toPrecision(2));  // "99"
alert(num.toPrecision(3));  // "99.0"

var numberObject = new Number(10);
var numberValue = 10;
alert(typeof numberObject);             // "object"
alert(typeof numberValue);              // "number"
alert(numberObject instanceof Number);  // true
alert(numberValue instanceof Number);   // false