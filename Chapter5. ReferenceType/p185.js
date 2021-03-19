var numberObject = new Number(10);

var num = 10;

alert(num.toString());    // "10"
alert(num.toString(2));   // "1010"
alert(num.toString(8));   // "12"
alert(num.toString(10));  // "10"
alert(num.toString(16));  // "a"

var num = 10;
alert(num.toFixed(2));   // "10.00"

// 반올림
num = 10.005;
alert(num.toFixed(2));   // "10.01"

// toExponential()
num = 10;
alert(num.toExponential(1));   // "1.0e+1"