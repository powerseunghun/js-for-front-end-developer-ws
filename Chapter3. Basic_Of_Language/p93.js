var count = 10;
start: for(var i = 0; i < count; i++) {
    alert(i);
}
var num = 0;
for (var i = 1; i < 10; i++) {
    if (i % 5 == 0) {
        break;
    }
    num++;
}
alert(num);  // 4

var num = 0;
for (var i = 1; i < 10; i++) {
    if (i % 5 == 0) {
        continue;
    }
    num++;
}
alert(num);  // 8
var num = 0;
outermost:
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            break outermost;
        }
        num++;
    }
}
alert(num);   // 55
// num++은 총 100번 실행되는데 i가 5, j가 5인 시점에서 실행이 멈추므로 55
var num = 0;
outermost:
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            continue outermost;
        }
        num++;
    }
}
alert(num);   // 95
// continue 문은 실행을 강제하는데 내부 루프가 아니라 외부 루프의 실행을 강제한다.
// j가 5가 되면 continue문이 실행되고 내부 루프는 다섯 번의 실행을 건너뛰므로 95