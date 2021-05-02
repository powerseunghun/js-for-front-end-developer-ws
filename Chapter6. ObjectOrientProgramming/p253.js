function SuperType() {
	this.property = true;
}

SuperType.prototype.getSuperValue = function() {
	return this.property;
}

function SubType() {
	this.subproperty = false;
}

// SuperType에서 상속
SubType.prototype = new SuperType();

// new Method
SubType.prototype.getSubValue = function() {
	return this.subproperty;
}

// Method Override
SubType.prototype.getSuperValue = function() {
	return false;
}

var instance = new SubType();
alert(instance.getSuperValue());   // false