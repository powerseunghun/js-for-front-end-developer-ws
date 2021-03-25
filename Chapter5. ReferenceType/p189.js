var stringValue = "hello ";
var result = stringValue.concat("world");
alert(result);         // "hello world"
// stringValue는 값이 바뀌지 않는다.(원본 손상 x)
alert(stringValue);    // "hello "

result = stringValue.concat("world", "1");
alert(result);         // "hello world"
alert(stringValue);    // "hello "

stringValue = "hello world";
alert(stringValue.slice(3));           // "lo world"
alert(stringValue.substring(3));       // "lo world"
alert(stringValue.substr(3));          // "lo world"
alert(stringValue.slice(3, 7));        // "lo w"
alert(stringValue.substring(3, 7));    // "lo w"
alert(stringValue.substr(3, 7));       // "lo worl"

alert(stringValue.slice(-3));          // "rld"
alert(stringValue.substring(-3));      // "hello world"
alert(stringValue.substr(-3));         // "rld"
alert(stringValue.slice(3, -4));       // "lo w"
alert(stringValue.substring(3, -4));   // "hel"
alert(stringValue.substr(3, -4));      // ""(빈 문자열)