var expression = /pattern/flags;

// 모든 "at"에 일치
var pattern1 = /at/g;

// "bat"이나 "cat"중 처음 나온 것에 일치, 대소문자 구분 없음
var pattern2 = /[bc]at/i;

// "at"으로 끝나는 세 글자에 모두 일치, 대소문자 구분 없음
var pattern3 = /.at/gi;

// meta escape

// "bat"이나 "cat"중 처음 나온 것에 일치, 대소문자 구분 없음
var pattern4 = /[bc]at/i;

// 처음 나온 "[bc]at"에 일치, 대소문자 구분 없음
// 만약 리터럴 "[bc]at" 대괄호를 이스케이프해야 한다.
var pattern5 = /\[bc\]at/i;

// "at"으로 끝나는 세 글자에 모두 일치, 대소문자 구분 없음
// at앞에 무슨 글자가 있든 상관 없다(메타 문자)
var pattern6 = /.at/gi;

// ".at"에 모두 일치, 대소문자 구분 없음
// 리터럴 ".at"
var pattern7 = /\.at/gi;

// RegExp Constructor
// pattern1 == pattern2
var pattern1 = /[bc]at/i;

var pattern2 = new RegExp("[bc]at", "i");