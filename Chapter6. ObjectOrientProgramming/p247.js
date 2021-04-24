// Durable Constructor Pattern
function Person(name, age, job) {
    // 반환할 객체 생성
    var o = new Object();

    // 옵션 : 변수와 함수는 여기서 정의한다.

    // 메서드 등록
    o.sayName = function() {
        alert(name);
    };

    return o;
}
var friend = Person("Nicholas", 29, "Software Engineer");
friend.sayName();   // "Nicholas"