// function Person(name, age, job) {
// 	this.name = name;
// 	this.age = age;
// 	this.job = job;
// 	this.sayName = new Function("alert(this.name)"); // 논리적으로 동등
// }

// alert(person1.sayName == person2.sayName);  // false

function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}

function sayName() {
	alert(this.name);
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");