var num1 = 25;      // 2진 00000000000000000000000000011001
var num2 = ~num1    // 2진 11111111111111111111111111100110
alert(num2);        // 26

var num3 = 25;
var num4 = -num3 - 1;
alert(num4);        // 26

var result = 25 & 3;
alert(result);  // 1
result = 25 | 3;
alert(result);  // 27
result = 25 ^ 3;
alert(result);  // 26

var oldValue = 2;              // 2진수 10과 같다.
var newValue = oldValue << 5;  // 2진수 1000000, 10진수 64와 같다.

oldValue = 64;             // 2진수 1000000과 같다.
newValue = oldValue >> 5;  // 2진수 10, 10진수 2와 같다.

oldValue = 64;              // 2진수 1000000과 같다.
newValue = oldValue >>> 5;  // 2진수 10, 10진수 2와 같다.

oldValue = -64;             // 2진 11111111111111111111111111000000
newValue = oldValue >>> 5;  // 10진 134,217,726과 같다.