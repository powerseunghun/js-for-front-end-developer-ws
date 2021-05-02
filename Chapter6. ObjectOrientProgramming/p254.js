function SuperType() {
	this.property = true;
}

SuperTyppe.prototype.getSuperValue = function() {
	return this.property;
}

function SubType() {
	this.subproperty = false;
}

// SuperType에서 상속
SubType.prototype = new SuperType();

// 메서드를 추가하려는 시도 - 앞 줄을 무효화한다.
SubType.prototype = {
	getSubValue: function() {
		return this.subproperty;
	},
	someOtherMethod: function() {
		return false;
	}
};

var instance = new SubType();
alert(instance.getSuperValue());   // error