function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

function createAnother(original) {
	// 함수를 호출하여 새 객체를 생성
	var clone = object(original);
	// 객체를 확장
	clone.sayHi = function() {
		alert("hi");
	};

	// 확장된 객체를 반환
	return clone;
}

var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = createAnotherPerson(person);
anotherPerson.sayHi();   // "hi"