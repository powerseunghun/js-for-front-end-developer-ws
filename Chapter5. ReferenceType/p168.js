var text = "this has been a short summer";
var pattern = /(..)or(.)/g;

if (pattern.test(text)) {
    alert(RegExp.$1);     // sh
    alert(RegExp.$2);     // t
}
// test() 메서드는 단순히 불리언 값만 반환하지만 
// RegExp 생성자에는 $1, $2 프로퍼티가 자동으로 설정된다.