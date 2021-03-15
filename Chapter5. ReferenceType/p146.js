var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);

alert(colors);   // red,green,blue
alert(colors2);  // red,green,blue,yellow,black,brown

var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1, 4);

alert(colors2);   // green,blue,yellow,purple
alert(colors3);   // green,blue,yellow