function Person() {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	alert(this.name);
};

var person1 = new Person();
var person2 = new Person();

alert(person1.hasOwnProperty("name"));  // false

person1.name = "Greg";
alert(person1.name);   // "Greg" - 인스턴스
alert(person1.hasOwnProperty("name"));  // true

alert(person2.name);   // "Nicholas" - 프로토타입
alert(person2.hasOwnProperty("name"));  // false

delete person1.name;
alert(person1.name);   // "Nicholas" - 프로토타입
alert(person1.hasOwnProperty("name"));  // false