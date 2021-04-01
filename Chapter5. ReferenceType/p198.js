// localeCompare()
var stringValue = "yellow";

alert(stringValue.localeCompare("brick"));   // 1
alert(stringValue.localeCompare("yellow"));  // 0
alert(stringValue.localeCompare("zoo"));     // -1

// localeCompare methods abstracted function determineOrder
function determineOrder(value) {
	var result = stringValue.localeCompare(value);
	if (result < 0) {
		alert("The string 'yellow' comes before the string '" + value + "'.");
	}
	else if (result > 0) {
		alert("The string 'yellow' comes after the string '" + value + "'.");
	}
	else {
		alert("The string 'yellow' is equal to the string '" + value + "'.");
	}
}

determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");