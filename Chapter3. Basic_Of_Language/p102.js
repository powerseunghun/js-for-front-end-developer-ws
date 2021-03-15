function sayHi() {
    alert("Hello " + arguments[0] + ", " + arguments[1]);
}

function howManyArgs() {
    alert(arguments.length);
}

howManyArgs("string", 45);   // 2
howManyArgs();               // 0
howManyArgs(12);             // 1

function doAdd() {
    if (arguments.length == 1) {
        alert(arguments[0] + 10);
    }
    else if(arguments.length == 2) {
        alert(arguments[0] + arguments[1]);
    }
}

doAdd(10);       // 20
doAdd(30, 20);   // 50