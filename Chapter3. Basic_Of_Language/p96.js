var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;
// 이 코드에서는 location 객체를 매 행마다 참조한다.

with(location) {
    var qs = search.substring(1);
    var hostName = hostname;
    var url = href;
}