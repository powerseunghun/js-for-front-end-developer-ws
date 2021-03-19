var obj = new Object("some text");
alert(obj instanceof String);     // true

var value = "25";
var number = Number(value);     // 형 변환 함수
alert(typeof number);           // "number"

var obj = new Number(value);    // 생성자
alert(typeof obj);              // "object"