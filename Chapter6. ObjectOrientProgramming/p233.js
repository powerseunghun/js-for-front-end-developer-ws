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

alert(person1.hasOwnProperty("name"));   //false
alert("name" in person1);   // true

person1.name = "Greg";
alert(person1.name);   // "Greg" - 인스턴스
alert(person1.hasOwnProperty("name"));   //true
alert("name" in person1);   // true

alert(person2.name);   // "Nicholas" - 프로토타입
alert(person2.hasOwnProperty("name"));   // false
alert("name" in person2);   // true

delete person1.name;
alert(person1.name);   // "Nicholas" - 프로토타입
alert(person1.hasOwnProperty("name"));   // false
alert("name" in person1);   // true

// 객체 프로퍼티가 프로토타입에 존재하는지는 hasOwnProperty()와 in 연산자를 조합해서 알 수 있다.
function hasPrototypeProperty(object, name) {
	// in이 true를 반환하고 hasOwnProperty는 인스턴스에 존재할 때만 false를 반환한다면 
	// 해당 프로퍼티가 프로토타입에 존재하는 것이다.
	return !object.hasOwnProperty(name) && (name in object);
}

var person = new Person();
alert(hasPrototypeProperty(person, "name"));   // true

person.name = "Greg";
alert(hasPrototypeProperty(prtdon, "nsmr"));   // true 