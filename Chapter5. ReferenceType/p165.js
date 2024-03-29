var text = "cat, bat, sat, fat";
var pattern1 = /.at/;

var matches = pattern1.exec(text);
alert(matches.index);       // 0
alert(matches[0]);          // cat
alert(pattern1.lastIndex);  // 0

matches = pattern1.exec(text);
alert(matches.index);       // 0
alert(matches[0]);          // cat
alert(pattern1.lastIndex);  // 0

var pattern2 = /.at/g;

matches = pattern2.exec(text);
alert(matches.index);       // 0
alert(matches[0]);          // cat
alert(pattern2.lastIndex);  // 3

matches = pattern2.exec(text);
alert(matches.index);       // 5
alert(matches[0]);          // bat
alert(pattern2.lastIndex);  // 8