// var s1 = "some text";
// var s2 = s1.substring(2);

// 두 번째 줄에서 읽기 모드로 s1에 접근하는 순간
// 1. String 타입의 인스턴스를 만든다.
// 2. 해당 인스턴스에서 메서드를 호출한다.
// 3. 인스턴스를 파괴한다.

var s1 = new String("some text");
var s2 = s1.substring(2);
s1 = null;