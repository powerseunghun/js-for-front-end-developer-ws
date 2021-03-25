// string object creation
var stringObject = new String("hello world");

var stringValue = "hello world";
// 해당 문자열이 2바이트 문자(ASCII 문자는 1바이트)이더라도 한 글자로 계산한다.
alert(stringValue.length);   // "11"

alert(stringValue.charAt(1));      // "e"
alert(stringValue.charCodeAt(1));  // "101"

alert(stringValue[1]);    // "e"

