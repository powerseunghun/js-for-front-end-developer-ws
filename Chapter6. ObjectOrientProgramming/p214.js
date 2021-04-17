var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";

person.sayName = function() {
	alert(this.name);
};

// Object Literal Pattern
person = {
	name: "Nicholas",
	age: 29,
	job: "Software Engineer",
	
	sayName: function() {
		alert(this.name);
	}
};

// p.215
//[[Value]] = "Nicholas"로 지정되며 값이 바뀐다면 모두 이 위치에 저장된다는 의미
person = {
	name: "Nicholas"
};