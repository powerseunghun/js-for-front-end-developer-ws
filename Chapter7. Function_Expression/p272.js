function createComparisonFunction(propertyName) {
	return function(object1, object2) {
        // 익명 함수(내부 함수)에서 외부 함수의 변수 propertyName에 접근
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if (value1 < value2) {
			return -1;
		}
		else if (value1 > value2) {
			return 1;
		}
		else {
			return 0;
		}
	}
}
// 내부 함수의 스코프 체인에 createComparisonFunction()의 스코프가 포함되기 때문

function compare(value1, value2) {
	if (value1 < value2) {
		return -1;
	}
	else if (value1 > value2) {
		return 1;
	}
	else {
		return 0;
	}
}
var result = compare(5, 10);

// 함수 생성
var compareNames = createComparisonFunction("name");

// 함수 호출
var result = compareNames({ name: "Nicholas" }, { name: "Greg" });

// 함수 파괴 - 메모리 회수 가능
compareNames = null;