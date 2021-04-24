// Parasitic Constructor Pattern
function Person(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(this.name);
	};
	return o;
}

var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();   // "Nicholas"

function SpecialArray() {
	// 배열 생성
	var values = new Array();

	// 값 추가
	values.push.apply(values, arguments);

	// 메서드 할당
	values.toPipedString = function() {
		return this.join("|");
	};
	return values;
}

var colors = new SpecialArray("red", "blue", "green");
alert(colors.toPipedString());   // "red|blue|green"
