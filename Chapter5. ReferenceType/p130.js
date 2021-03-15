// new 연산자와 생성자 사용
var person = new Object();
person.name = "Nicholas";
person.age = 29;

// 객체 리터럴 표기법
var person = {
    name: "Nicholas",
    age: 29
};
var person = {};             // new Object()와 동일
person.name = "Nicholas";
person.age = 29;

function displayInfo(args) {
    var output = "";
    if (typeof args.name == "string") {
        output += "Name : " + args.name + "\n";
    }
    if (typeof args.name == "number") {
        output = "Age : " + args.name + "\n";
    }
    alert(output);
}
displayInfo({
    name: "Nicholas",
    age: 29
});
displayInfo({
    name: "Greg"
});


alert(person["name"]);

alert(person.name);