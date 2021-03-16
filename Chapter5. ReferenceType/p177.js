// function outer() {
// 	inner();
// }

// function inner() {
// 	alert(inner.caller);
// }

// outer();

// function outer() {
//   inner();
// }
// 출력

function outer() {
	inner();
}

function inner() {
	alert(arguments.callee.caller);
}

outer();