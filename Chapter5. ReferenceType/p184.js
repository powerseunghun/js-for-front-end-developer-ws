var booleanObject = new Boolean(true);

var falseObject = new Boolean(false);
// falseObject라는 객체를 true로 평가
var result = falseObject && true;
alert(result);   // true

var falseValue = false;
result = falseValue && true;
alert(result);   // false