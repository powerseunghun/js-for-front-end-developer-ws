var colors = ["red", "blue", "green"];
alert(colors[0]);
colors[2] = "black";
colors[3] = "brown";  // 네 번째 데이터 추가

var colors = ["red", "blue", "green"];
colors.length = 2;
alert(colors[2]);    // undefined

var colors = ["red", "blue", "green"];
colors.length = 4;
alert(colors[3]);    // undefined

var colors = ["red", "blue", "green"];
colors[colors.length] = "black";  // 인덱스 3에 데이터 추가
colors[colors.length] = "brown";  // 인덱스 4에 데이터 추가

var colors = ["red", "blue", "green"];
colors[99] = "black";
alert(colors.length);   // 100