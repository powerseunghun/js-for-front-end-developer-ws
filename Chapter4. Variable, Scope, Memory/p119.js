function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
var result = add(10, 20);  // 30
alert(sum);                // sum은 유효한 변수가 아니므로 에러가 발생한다.

function add2(num1, num2) {
    sum = num1 + num2;
    return sum;
}
var result = add(10, 20);  // 30
alert(sum);                // 30