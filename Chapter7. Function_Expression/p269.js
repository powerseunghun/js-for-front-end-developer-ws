// 함수 호이스팅을 이해해야 함수 선언과 표현식 차이를 이해할 수 있다.
// 절대 이렇게 하면 안됨.
// if (condition) {
// 	function sayHi() {
// 		alert("Hi!");
// 	}
// }
// else {
// 	function sayHi() {
// 		alert("Yo!");
// 	}
// }

// 함수 표현식을 사용하면 안전
var sayHi;

if (condition) {
	sayHi = function() {
		alert("Hi!");
	};
}
else {
	sayHi = function() {
		alert("Yo!");
	}
}