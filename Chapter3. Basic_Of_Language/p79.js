var result1 = 5 + 5;    // 숫자 두 개
alert(result1);         // 10
var result2 = 5 + "5";  // 숫자 한 개와 문자열 한 개
alert(result2);         // "55"

var result3 = 5 - true;  // true는 1로 변환되므로 4
var result4 = NaN - 1;   // NaN
var result5 = 5 - 3;     // 2
var result6 = 5 - "";    // 빈 문자열은 0으로 변환되므로 5
var result7 = 5 - "2";   // "2"는 2로 변환되므로 3
var result8 = 5 - null;  // null은 0으로 변환되므로 5