var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;

if (pattern.test(text)) {
    alert("The pattern was matched.");
}

var pattern = new RegExp("\\[bc\\]at", "gi");
alert(pattern.toString());           // \[bc\]at/gi
alert(pattern.toLocaleString());     // \[bc\]at/gi

// p.167
var text = "this has been a short summer";
var pattern = /(.)hort/g;

// 오페라는 input, lastMatch, lastParen, multiline을 지원하지 않는다.
// 인터넷 익스플로러는 multiline을 지원하지 않는다.

if (pattern.test(text)) {
    alert(RegExp.input);            // this has been a short summer
    // alert(RegExp.$_);            // this has been a short summer
    alert(RegExp.leftContext);      // this has been a 
    // alert(RegExp["$'"]);         // this has been a
    alert(RegExp.rightContext);     // summer
    // alert(RegExp["$'"]);         // summer
    alert(RegExp.lastMatch);        // short
    // alert(RegExp["$&"]);         // short
    alert(RegExp.lastParen);        // s
    // alert(RegExp["$+"]);         // s
    alert(RegExp.multiline);        // false
    // alert(RegExp["$*"]);         // false
}