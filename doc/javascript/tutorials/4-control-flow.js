/**
 * Control flow
 */

console.log("----- pre increment/decrement-----");

var x1 = 1;
var y1 = ++x1;
console.log("x1: " + x1);
console.log("y1: " + y1);
var sum1 = ++x1 + 1;
console.log("sum1: " + sum1)

console.log("----- post increment -----");

var x2 = 1;
var y2 = x2++;
console.log("x2: " + x2);
console.log("y2: " + y2);
var sum2 = x2++ + 1;
console.log("sum2: " + sum2);

console.log("----- if else statement -----");

var num1 = 1;
var num2 = 2;
if (num1 > num2) {
	console.log("num1 > num2: " + (num1 > num2));
}

var str1 = "str";
if(str1 === "str"){
	console.log("str1 == \"str\"" + (str1 === "str"));
}

var score = NaN;
if (!isNaN(score)) {
	if (score > 90 && score <= 100) {
		console.log("score is A");
	} else if (score > 80) {
		console.log("score is B");
	} else if (score > 70) {
		console.log("score is C");
	} else if (score >= 60) {
		console.log("score is D");
	} else {
		console.log("E级");
	}
} else {
	console.log("num is NaN");
}

console.log("----- conditional operator -----");

var x3 = 10;
var y3 = 20;
var result1 = x3 > y3 ? x3 : y3;
console.log(result1);

console.log("----- switch operator -----");

var jiBie = "A";
switch (jiBie) {
	case "A":
		console.log("90到100之间");
		break;
	case "B":
		console.log("80到90之间");
		break;
	case "C":
		console.log("70到80之间");
		break;
	case "D":
		console.log("60到70之间");
		break;
	default :
		console.log("0到59之间");
}

var num = "10";
console.log("\"10\" == 10: ", "10" == 10);
console.log("\"10\" === 10: ", "10" === 10);
switch (num) {
	case 10:
		console.log("Number 10");
		break;
	case "10":
		console.log("String 10");
		break;
}

var month=12;
switch (month){
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12: console.log("Month " + month, "has 31 days"); break;
	case 4:
	case 6:
	case 9:
	case 11: console.log("Month " + month, "has 30 days"); break;
	case 2:  console.log("Month " + month, "has 28 days"); break;
}