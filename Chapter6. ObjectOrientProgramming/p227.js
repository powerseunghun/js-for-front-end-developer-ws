// Prototype Pattern
function Person() {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	alert(this.name);
};

var person1 = new Person();
person1.sayName();    // "Nicholas"

var person2 = new Person();
person2.sayName();    // "Nicholas"

alert(person1.sayName == person2.sayName);   // true

// p228~p229 Prototype Working Mechanism
alert(Person.prototype.isPrototypeOf(person1));   // true
alert(Person.prototype.isPrototypeOf(person2));   // true

alert(Object.getPrototypeOf(person1) == Person.prototype);   // true
alert(Object.getPrototypeOf(person1).name);   // "Nicholas"