// [[Writable]] 속성
var person = {};
Object.defineProperty(person, "name", {
	writable: false,
	value: "Nicholas"
});

alert(person.name);      // "Nicholas"
person.name = "Greg";
alert(person.name);      // "Nicholas"

// [[Configurable]] 속성
// person = {};
Object.defineProperty(person, "name", {
	configurable: false,
	value: "Nicholas"
});

alert(person.name);    // "Nicholas"
delete person.name;
alert(person.name);    // "Nicholas"

// p.217
// var person = {};
Object.defineProperty(person, "name", {
	configurable: false,
	value: "Nicholas"
});

// Error Occur
Object.defineProperty(person, "name", {
	configurable: true,
	value: "Nicholas"
});