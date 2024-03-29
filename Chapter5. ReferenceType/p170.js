// 함수 선언
function sum(num1, num2) {
    return num1 + num2;
}

// 함수 표현식
var sum = function(num1, num2) {
    return num1 + num2;
};

// Function 생성자
// 권장하지 않음
var sum = new Function("num1", "num2", "return num1 + num2");

// multi name
function sum(num1, num2) {
    return num1 + num2;
}
alert(sum(10, 10));         // 20

var anotherSum = sum;
alert(anotherSum(10, 10));  // 20

sum = null;
alert(anotherSum(10, 10));  // 20