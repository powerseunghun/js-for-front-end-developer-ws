// Combination Inheritance & PseudoClassical Inheritance
function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
	alert(this.name);
};

function SubType(name, age) {
	// 프로퍼티 상속
	SuperType.call(this, name);

	this.age = age;
}

// 메서드 상속
SubType.prototype = new SuperType();

SubType.prototype.sayAge = function() {
	alert(this.age);
};

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors);   // "red,blue,green,black"
instance1.sayName();       // "Nicholas"
instance1.sayAge();        // 29

var instance2 = new SubType("Greg", 27);
alert(instance2.colors);   // "red,blue,green"
instance2.sayName();       // "Greg"
instance2.sayAge();        // 27