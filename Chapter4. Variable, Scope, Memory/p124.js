var element = document.getElementById("some_element");
var myObject = new Object();
myObject.element = element;
element.someObject = myObject();

myObject.element = null;
element.someObject = null;