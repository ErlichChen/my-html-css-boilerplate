/**
 * Functions
 * In JavaScript, functions are first-class objects, they have properties and methods
 */

// declare the function
let obj1 = {
	name: "name1"
}
console.log(obj1);
function func1(obj) {
	// funciton arguments
	console.log("function arguments size: " + arguments.length);
	obj.name = "name2";

}
func1(obj1);
console.log(obj1);
console.log("The function type: " + typeof func1);

// funtion expressions
var add = function(a, b) { return a + b; }
console.log("2 + 1 = " + add(2, 1));
var sub = function(a, b) { return a - b; }
console.log("2 - 1 = " + sub(2, 1));

var factorial = function fac(n) {
	return n < 2 ? 1 : n * fac(n - 1)
}
console.log(factorial(5));

function map(fn, a) {
	let result = [];
	for (let i = 0; i != a.length; i++)
		result[i] = fn(a[i]);
	return result;
}

var arr = [1, 2, 3, 4]
var fn  = function(x) { return x * x; }
var square = map(fn, arr);
console.log(square);

// function scope
var globalVar1 = 10; // global variable
function f1() {
	globalVar2 = 20; // implicitly typed global variable
}
if (true) {
	var globalVar3 = 30;
	// let globalVar3 = 30; wrong
}
f1();
console.log("globalVar1: " + globalVar1);
console.log("globalVar2: " + globalVar2);
console.log("globalVar3: " + globalVar3);

var mul2 = function(a) {
	return function() {
		return 2 * a;
	}
}
console.log("mul2: " + mul2(2)());

// pre parse
func3();
function func3() {
	console.log("pre parse var3: " + var3);
	var var3 = 10;
	console.log("pre parse func3");
}

(function() {
	console.log("immediately-invoked function expression");
})();