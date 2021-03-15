var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

alert(numbers.indexOf(4));          // 3
alert(numbers.lastIndexOf(4));      // 5

alert(numbers.indexOf(4, 4));       // 5
alert(numbers.lastIndexOf(4, 4));   // 3

var person = { name: "Nicholas" };
var people = [{ name: "Nicholas" }];
var morePeople = [person];

alert(people.indexOf(person));      // -1
alert(morePeople.indexOf(person));  // 1

// every , some
numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var everyResult = numbers.every(function(item, index, array) {
    return (item > 2);
});

alert(everyResult);    // false

var someResult = numbers.some(function(item, index, array) {
    return (item > 2);
});

alert(someResult);     // true

// filter()
numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var filterResult = numbers.filter(function(item, index, array) {
    return (item > 2);
});

alert(filterResult);   // [3,4,5,4,3]

// map
numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var mapResult = numbers.map(function(item, index, array){
    return item * 2;
});

// filter()와 유사하나 1:1로 대응하는 배열을 만들 때 유용
alert(mapResult);     // [2,4,6,8,10,8,6,4,2]

// forEach()
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

numbers.forEach(function(item, index, array) {
    // code
});