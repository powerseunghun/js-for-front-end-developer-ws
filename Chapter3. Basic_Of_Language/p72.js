alert(!false);   // true
alert(!"blue");  // false
alert(!0);       // true
alert(!NaN);     // true
alert(!"");      // true
alert(!12345);   // false

alert(!!"blue");  // true
alert(!!0);       // false
alert(!!NaN);     // false
alert(!!"");      // false
alert(!!12345);   // true