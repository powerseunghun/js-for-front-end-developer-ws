alert(Math.ceil(25.9));     // 26
alert(Math.ceil(25.5));     // 26
alert(Math.ceil(25.1));     // 26

alert(Math.round(25.9));    // 26
alert(Math.round(25.5));    // 26
alert(Math.round(25.1));    // 25

alert(Math.floor(25.9));    // 25
alert(Math.floor(25.5));    // 25
alert(Math.floor(25.1));    // 25

// p.208
var number = Math.floor(Math.random() * total_number_of_choices + first_possible_value);

// 1 ~ 10
number = Math.floor(Math.random() * 10 + 1);

// 2 ~ 10
number = Math.floor(Math.random() * 9 + 2);

// 경우의 수를 세는 것보다는 범위를 제공하면 그 사이의 난수를 반환하는 함수가 편리하다
function selectFrom(lowerValue, upperValue) {
	var choices = upperValue - lowerValue + 1;
	return Math.floor(Math.random() * choices + lowerValue);
}

var num = selectFrom(2, 10);
alert(num);   // 2 ~ 10

// get Random Value From Array
var colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
var color = colors[selectFrom(0, colors.length-1)];