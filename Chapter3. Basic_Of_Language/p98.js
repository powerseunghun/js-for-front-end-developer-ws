switch("hello world") {
    case "hello" + "world":
        alert("Greeting was found.");
        break;
    case "goodbye":
        alert("Closing was found.");
        break;
    default:
        alert("Unexpected message was found.");
}

// 표현식 사용 가능
var num = 25;
switch(true) {
    case num < 0:
        alert("Less than 0.");
        break;
    case num >= 0 && num <= 10:
        alert("Between 0 and 10.");
        break;
    case num > 10 && num <= 20:
        alert("Between 10 and 20.");
        break;
    default:
        alert("More than 20.");
}