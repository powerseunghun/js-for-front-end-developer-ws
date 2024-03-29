var book = {};

Object.defineProperties(book, {
	_year: {
		value: 2004
	},
	edition: {
		value: 1
	},
	year: {
		get: function() {
			return this._year;
		},
		set: function(newValue) {
			if (newValue > 2004) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
});

// p.221  Read Property Attribute
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
alert(descriptor.value);             // 2004
alert(descriptor.configurable);      // false
alert(typeof descriptor.get);        // "undefined"

var descriptor = Object.getOwnPropertyDescriptor(book, "year");
alert(descriptor.value);             // undefined
alert(descriptor.enumerable);        // false
alert(typeof descriptor.get);        // "function"