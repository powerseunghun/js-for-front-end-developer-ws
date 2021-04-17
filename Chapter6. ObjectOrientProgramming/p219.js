var book = {
	_year: 2004,
	edition: 1
};

// 구식 접근자 지원
book.__defineGetter__("year", function() {
	return this.year;
});

book.__defineSetter__("year", function(newValue) {
	if (newValue > 2004) {
		this._year = newValue;
		this.edition += newValue - 2004;
	}
});

book.year = 2005;
alert(book.edition);    // 2