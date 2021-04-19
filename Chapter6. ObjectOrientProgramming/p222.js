// Factory Pattern -> Object Abstract
// function createPerson(name, age, job) {
// 	var o = new Object();
// 	o.name = name;
// 	o.age = age;
// 	o.job = job;
// 	o.sayName = function() {
// 		alert(this.name);
// 	};
// 	return o;
// }

// var person1 = createPerson("Nicholas", 29, "Software Engineer");
// var person2 = createPerson("Greg", 27, "Doctor");

// Constructor Pattern
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		alert(this.name);
	};
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

alert(person1.constructor == Person);   // true
alert(person2.constructor == Person);   // true

alert(person1 instanceof Object);   // true
alert(person1 instanceof Person);   // true
alert(person2 instanceof Object);   // true
alert(person2 instanceof Person);   // true

// p225 Constructor as Function
// 생성자로 사용
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();    // "Nicholas"

// 함수로 호출
Person("Greg", 27, "Doctor");   // window에 추가
window.sayName();    // "Greg"

// 다른 객체의 스코프에서 호출
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();         // "Kristen"