function htmlEscape(text) {
	return text.replace(/[<>"&]/g, function(match, pos, originalText) {
		switch(match) {
			case "<":
				return "&lt;";
			case ">":
				return "&gt;";
			case "&":
				return "&amp;";
			case "\"":
				return "&quot;";
		}
	});
}
alert(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
// "&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;";

var colorText = "red,blue,green,yello";
var colors1 = colorText.split(",");       // ["red", "blue", "green", "yellow"]
var colors2 = colorText.split(",", 2);    // ["red", "blue"]
var colors3 = colorText.split(/[^\,]+/);  // ["",",",",",",",""]