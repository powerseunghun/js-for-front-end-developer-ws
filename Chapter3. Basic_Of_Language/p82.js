var result = "Brick" < "alphabet";  // true
var result = "Brick".toLowerCase() < "alphabet".toLowerCase(); // false
var result = "23" < "3";  // true
var result = "23" < 3;  // false

var result = "a" < 3;  // "a"는 NaN으로 변환되므로 false

var result1 = NaN < 3;   // false
var result2 = NaN >= 3;  // false