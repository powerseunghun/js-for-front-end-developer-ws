window.color = "red";
var o = { color : "blue" };

function sayColor() {
	alert(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor();    // blue

// bind()를 호출하면서 객체 o를 넘겨 objectSayColor() 함수를 생성한다.
// objectSayColor() 함수의 this는 o에 묶이므로 전역에서 함수를 호출하더라도
// 항상 "blue"를 표시한다. 이 방법의 장점은 22장에...