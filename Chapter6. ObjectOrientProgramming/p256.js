function SuperType(name) {
	this.name = name;
}

function SubType() {
	// SuperType에서 상속하되 매개변수를 전달
	SuperType.call(this, "Nicholas");

	// 인스턴스 프로퍼티
	this.age = 29;
}

var instance = new SubType();
alert(instance.name);   // "Nicholas"
alert(instance.age);    // 29