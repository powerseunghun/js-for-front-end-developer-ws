function factorial(num) {
	if (num <= 1) {
		return 1;
	}
	else {
		return num * factorial(num-1);
	}
}

var anotherFactorial = factorial;
factorial = null;
// alert(anotherFactorial(4));   // error

// arguments.callee는 올바르게 동작
// -> 실행 중인 함수를 가리키는 포인터
function factorial(num) {
	if (num <= 1) {
		return 1;
	}
	else {
		return num * arguments.callee(num-1);
	}
}

// 스트릭트 모드에서는 arguments.callee 접근 불가
// 이름 붙은 함수 표현식을 사용해서 같은 결과 도출
var factorial = (function f(num) {
	if (num <= 1) {
		return 1;
	}
	else {
		return num * f(num-1);
	}
});