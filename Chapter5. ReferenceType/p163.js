var pattern1 = /\[bc\]at/i;

alert(pattern1.global);      // false
alert(pattern1.ignoreCase);  // true
alert(pattern1.multiline);   // false
alert(pattern1.lastIndex);   // 0
alert(pattern1.source);      // "\[bc\]at"

var pattern2 = new RegExp("\\[bc\\]at", "i");

alert(pattern2.global);      // false
alert(pattern2.ignoreCase);  // true
alert(pattern2.multiline);   // false
alert(pattern2.lastIndex);   // 0
alert(pattern2.source);      // "\[bc\]at"