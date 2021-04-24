// 루프와 if 문을 써서 최댓값을 찾을 필요가 없다.
var max = Math.max(3, 54, 32, 16);
alert(max);     // 54

var min = Math.min(3, 54, 32, 16);
alert(min);     // 3

// p.207
var values = [1, 2, 3, 4, 5, 6, 7, 8];
var max = Math.max.apply(Math, values);