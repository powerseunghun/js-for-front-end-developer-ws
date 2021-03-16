function sum(num1, num2) {
	return num1 + num2;
}

function callSum1(num1, num2) {
	return sum.call(this, num1, num2);
}

alert(callSum(10, 10));   // 20