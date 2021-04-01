var uri = "http://www.wrox.com/illegal value.htm#start";

// "http://www.wrox.com/illegal%20value.htm#start"
alert(encodeURI(uri));

// "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"
alert(encodeURIComponent(uri));