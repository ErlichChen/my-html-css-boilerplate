console.log("Hello lib");

exports.hello = "lib";

exports.add = function(a, b) {
	return a + b;
}

obj = { key: "value" };

exports = {
	obj
}

// setTimeout(() => {
// 	console.log(exports);
// }, 2000);