// function factorial(num) {
// 	if (num <= 1) {
// 		return 1;
// 	}
// 	else {
// 		return num * factorial(num - 1);
// 	}
// }
function factorial(num) {
	if (num <= 1) {
		return 1;
	}
	else {
		return num * arguments.callee(num-1);
	}
}
var trueFactorial = factorial;
factorial = function() {
	return 0;
};

alert(trueFactorial(5));  // 120
alert(factorial(5));      // 0