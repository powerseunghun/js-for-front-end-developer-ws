var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
    valueOf: function() {
        return -1;
    }
};

s1 = -s1;   // 숫자 -1
s2 = -s2;   // 숫자 -1.1
s3 = -s3;   // NaN
b = -b;     // 숫자 0
f = -f;     // -1.1로 바뀜
o = -o;     // 숫자 1