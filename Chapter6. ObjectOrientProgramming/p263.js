function inheritPrototype(subType, superType) {
	// 객체 생성
	var prototype = object(superType.prototype);

	// 객체 확장
	prototype.constructor = subType;

	// 객체 할당
	subType.prototype = prototype;
}

function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
	alert(this.name);
};

function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
	alert(this.age);
};