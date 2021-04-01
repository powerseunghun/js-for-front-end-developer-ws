var text = "cat, bat, sat, fat";
var pattern = /.at/;

// same pattern.exec(text)
var matches = text.match(pattern);
alert(matches.index);           // 0
alert(matches[0]);              // "cat"
alert(pattern.lastIndex);       // 0

// search
var pos = text.search(/at/);
alert(pos);     // 1

// 195
// text = "cat, bat, sat, fat";
result = text.replace(/(.at)/g, "word ($1)");
alert(result);    // word(cat),word(bat),word(sat),word(fat)

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