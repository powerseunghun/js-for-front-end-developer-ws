var o = {
	toString : function() {
		return "My object";
	}
};

for (var prop in o) {
	if (prop == "toString") {
		// IE 에서는 표시되지 않음
		alert("Found toString");
	}
}