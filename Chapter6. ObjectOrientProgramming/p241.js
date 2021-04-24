alert(typeof Array.prototype.sort);         // "function"
alert(typeof String.prototype.substring);   // "function"

String.prototype.startsWith = function(text) {
	return this.indexOf(text) == 0;
};

var msg = "Hello world";
alert(msg.startsWith("Hello"));   // true