var now = new Date();

var someDate = new Date(Date.parse("May 25, 2004"));

// var someDate = new Date("May 25, 2004");

// 2000년 1월 1일 0시
var y2k = new Date(Date.UTC(2000, 0));

// 2005년 5월 5일 오후 5시 55분 55초(GMT)
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));


// 2000년 1월 1일 0시(지역)
var y2k = new Date(2000, 0);

// 2005년 5월 5일 오후 5시 55분 55초(지역)
var allFives = new Date(2005, 4, 5, 17, 55, 55);

// 시작 시간
var start = Date.now();

// 실행 시간을 잴 함수, 작업
doSomething();

// 끝난 시간
var stop = Date.now(), result = stop - start;

// if browser not support Date.now() method
var start = +new Date();

doSomething();

var stop = +new Date(), result = stop - start;