function Person() {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	alert(this.name);
};

var keys = Object.keys(Person.prototype);
alert(keys);    // "name,age,job,sayName"

var p1 = new Person();
p1.name = "Rob";
p1.age = 31;
var p1keys = Object.keys(p1);
alert(p1keys);  // "name,age"

// 나열 가능 여부 관계 없이 프로퍼티 전체
keys = Object.getOwnPropertyNames(Person.prototype);
alert(keys);    // "constructor,name,age,job,sayName"