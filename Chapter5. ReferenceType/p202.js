eval("alert('hi')"); 
// --> alert("hi");

var msg = "hello world";
eval("alert(msg)");  // "hello world"

eval("function sayHi() { alert('hi'); }");
sayHi();

eval("var msg = 'hello world';");
alert(msg);    // "hello world"

"use strict";
eval = "hi"     // error occur

(function() {
	"use strict";
	eval = "hi";  // error occur
})();