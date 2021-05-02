function SuperType() {
	this.colors = ["red", "blue", "green"];
}

function SubType() {
}

// SuperType에서 상속
SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);   // "red,blue,green,black"

var instance2 = new SubType();
alert(instance2.colors);   // "red,blue,green,black"