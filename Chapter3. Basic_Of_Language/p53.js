var num1 = parseInt("1234blue");    // 1234
var num2 = parseInt("");            // NaN
var num3 = parseInt("0xA");         // 16진수 10
var num4 = parseInt(22.5);          // 22
var num5 = parseInt("70");          // 70
var num6 = parseInt("0xf");         // 16진수 15

var num7 = parseInt("0xAF", 16);   // 175
var num8 = parseInt("AF", 16);     // 175
var num9 = parseInt("AF");         // NaN

var num10 = parseInt("10", 2);   // 2진수 10은 10진수 2
var num11 = parseInt("10", 8);   // 8진수 10은 10진수 8
var num12 = parseInt("10", 10);  // 10
var num13 = parseInt("10", 16);  // 16진수 10은 10진수 16

var num14 = parseFloat("1234blue");  // 1234
var num15 = parseFloat("0xA");       // 0
var num16 = parseFloat("22.5");      // 22.5
var num17 = parseFloat("22.34.5");   // 22.34
var num18 = parseFloat("0908.5");    // 908.5
var num19 = parseFloat("3.125e7");   // 31250000