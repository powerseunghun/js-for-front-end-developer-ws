// Inheritance -> Prototype Chain
function SuperType() {
	this.property = true;
}

SuperType.prototype.getSuperValue = function() {
	return this.property;
};

function SubType() {
	this.subproperty = false;
}

// SuperType Inheritance
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
	return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperValue());   // true

// p.252
alert(instance instanceof Object);      // true
alert(instance instanceof SuperType);   // true
alert(instance instanceof SubType);     // true

alert(Object.prototype.isPrototypeOf(instance));      // true
alert(SuperType.prototype.isPrototypeOf(instance));   // true
alert(SubType.prototype.isPrototypeOf(instance));     // true