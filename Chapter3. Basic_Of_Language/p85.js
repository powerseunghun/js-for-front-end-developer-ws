var result1 = ("55" == 55);   // 변환한 후 비교하면 일치하므로 true
var result2 = ("55" === 55);  // 데이터 타입이 다르므로 일치하지 않아서 false

var result1 = ("55" != 55);   // 변환한 후 비교하면 일치하므로 false
var result2 = ("55" !== 55);  // 데이터 타입이 다르므로 일치하지 않아서 true

var result3 = (null == undefined);   // true
var result4 = (null === undefined);  // false