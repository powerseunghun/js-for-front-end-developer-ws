function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

// 크록포드
// var person = {
// 	name: "Nicholas",
// 	friends: ["Shelby", "Court", "Van"]
// };

// var anotherPerson = object(person);
// anotherPerson.name = "Greg";
// anotherPerson.friends.push("Rob");

// var yetAnotherPerson = object(person);
// yetAnotherPerson.name = "Linda";
// yetAnotherPerson.friends.push("Barbie");

// alert(person.friends);   // "Shelby,Court,Van,Rob,Barbie"

// 옵션 제외, 1개의 매개변수만 사용시 object와 Object.create()는 똑같이 동작
var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends);   // "Shelby,Court,Van,Rob,Barbie"

var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person, {
	name : {
		value: "Greg"
	}
});

alert(anotherPerson.name);   // "Greg"