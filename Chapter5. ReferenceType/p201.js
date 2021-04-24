var uri = "http://www.wrox.com/illegal value.htm#start";

// "http://www.wrox.com/illegal%20value.htm#start"
alert(encodeURI(uri));

// "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"
alert(encodeURIComponent(uri));

// encodeURI()는 공백문자를 제외한 특수문자는 전혀 손대지 않고 공백문자만 %20로 인코드 한 반면 
// encodeURIComponent() 메서드는 모든 특수문자를 인코드 했다.
// 따라서 encodeURI()는 완전한 URI에서 사용할 수 있지만 encodeURIComponent()는
// URI 마지막에 추가할 문자열에만 사용할 수 있다.