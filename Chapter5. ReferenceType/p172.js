// 에러가 생기지 않는다.
// '함수 선언 호이스팅'이란 과정을 통해 함수 선언을 읽고 실행 컨텍스트에 추가하기 때문
alert(sum(10, 10));
function sum(num1, num2) {
    return num1 + num2;
}

// 에러가 발생한다.
// 함수 선언이 아니라 초기화 문장의 일부분이기 때문
// 다시 말해 이 함수는 강조한 부분까지 실행하기 전에는 변수 sum에 할당되지 않아서
// unexpected identifier에러를 발생시킨다.
alert(sum2(10, 10));
var sum2 = function(num1, num2) {
    return num1 + num2;
}