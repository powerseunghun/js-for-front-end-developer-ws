var stringValue = "      hello world     ";
var trimmedStringValue = stringValue.trim();
alert(stringValue);            // "      hello world     "
alert(trimmedStringValue);     // "hello world"  원본 문자열 손상 x

stringValue = "hello world";
alert(stringValue.toLocaleUpperCase());   // "HELLO WORLD"
alert(stringValue.toUpperCase());         // "HELLO WORLD"
alert(stringValue.toLocaleLowerCase());   // "hello world"
alert(stringValue.toLowerCase());         // "hello world"