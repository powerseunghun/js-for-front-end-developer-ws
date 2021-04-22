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

person1.name = "Greg";
alert(person1.name);   // "Greg" - 인스턴스에서
alert(person2.name);   // "Nicholas" - 프로토타입에서

// delete로 완전히 삭제하여 다시 프로토타입에 접근 가능
delete person1.name;
alert(person1.name);  // "Nicholas"