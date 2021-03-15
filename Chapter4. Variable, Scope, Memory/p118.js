function buildUrl() {
    var qs = "?debug=true";
    with(location) {
        var url = href + qs;
    }
    return url;
}
if(true) {
    var color = "blue";
}
alert(color);   // "blue"

for (var i = 0; i < 10; i++) {
    // doSomething(i);
}
alert(i);   // 10