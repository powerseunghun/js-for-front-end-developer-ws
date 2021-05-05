// 함수 선언시 hoisting 으로 동작
// sayHi();
// function sayHi() {
// 	alert("Hi!");
// }

// 함수 표현식에서는 에러 발생 호이스팅 x, name 프로퍼티도 빈 문자열
sayHi();   // error - 함수가 아직 존재하지 않는다.
var sayHi = function() {
	alert("Hi");
}

