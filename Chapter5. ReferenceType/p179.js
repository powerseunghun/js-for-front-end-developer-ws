function sum(num1, num2) {
	return num1 + num2;
}

function callSum1(num1, num2) {
	return sum.apply(this, arguments);    // arguments 객체를 넘긴다.
}

function callSum2(num1, num2) {
	return sum.apply(this, [num1, num2]); // 배열을 넘긴다.
}

alert(callSum1(10, 10));   // 20
alert(callSum2(10, 10));   // 20