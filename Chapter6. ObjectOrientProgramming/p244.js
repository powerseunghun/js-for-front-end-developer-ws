function Person(name, age, job) {
	// Property
	this.name = name;
	this.age = age;
	this.job = job;

	// Method
	if (typeof this.sayName != "function") {
		Person.prototype.sayName = function() {
			alert(this.name);
		};
	}
}

var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();   // "Nicholas"