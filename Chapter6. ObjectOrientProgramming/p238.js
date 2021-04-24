function Person() {
}

Person.prototype = {
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	sayName : function() {
		alert(this.name);
	}
};

// Prototype 객체 리터럴에 constructor 프로퍼티를 명시하지 않고
// defineProperty를 통해 생성자 복귀([[Enumrable]] 속성 false로)
// ECMAScript 5판만 가능, 생성자를 복구한다.
Object.defineProperty(Person.prototype, "constructor", {
	enumerable: false,
	value: Person
});

// p239. Prototype's dynamic property
var friend = new Person();

Person.prototype.sayHi = function() {
	alert("hi");
};

// 인스턴스와 프로토타입 사이의 느슨한 연결 때문에 가능하다.
friend.sayHi();  // "hi"