// var found = true;
// var result = (found && someUndeclaredVariable); // 에러 발생
// alert(result) // 실행 x

var found = false;
var result = (found && someUndeclaredVariable);
alert(result);

found = true;
result = (found || someUndeclaredVariable);
alert(result); // 동작

// found = false;
// result = (found || someUndeclaredVariable); // 에러 발생
// alert(result); // 실행 x