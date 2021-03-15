var re = null, i;
for (i = 0; i < 10; i++) {
    re = /cat/g;
    re.test("catastrophe");
}

for (i = 0; i < 10; i++) {
    re = new RegExp("cat", "g");
    re.test("catstrophe");
}