var colors = new Array();
var count = colors.push("red", "green");
alert(count);   // 2

count = colors.push("black");
alert(count);   // 3

var item = colors.shift();
alert(item);
alert(colors.length);   // 2