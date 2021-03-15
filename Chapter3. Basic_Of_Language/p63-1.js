var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
    valueOf: function() {
        return -1;
    }
};

s1++; // 숫자 3
s2++; // NaN
b++;  // 숫자 1
f--;  // 0.10000000000000009(부동소수점의 부정확성 때문에)
o--;  // 숫자 -2