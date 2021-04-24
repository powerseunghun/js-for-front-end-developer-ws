function Person() {
}

Person.prototype = {
    // p.238 Object가 아니라 Person을 가리키길 원한다면 명시적으로 지정 가능
    //constructor : Person,
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	sayName : function() {
		alert(this.name);
	}
};

var friend = new Person();

alert(friend instanceof Object);       // true
alert(friend instanceof Person);       // true
alert(friend.constructor == Person);   // false, 명시적으로 지정 시 true
alert(friend.constructor == Object);   // true