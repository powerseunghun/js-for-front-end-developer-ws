var colors = new Array();
var count = colors.push("red", "green");
alert(count);   // 2

count = colors.push("black");
alert(count);   // 3

var item = colors.pop();
alert(item);    // "black"
alert(colors.length);   // 2

var colors = ["red", "blue"];
colors.push("brown");
colors[3] = "black";
alert(colors.length);   // 4

var item = colors.pop();
alert(item);