/**
 * JavaScript is designed on a simple object-based paradigm.
 * An object is a collection of properties, and a property is an association between a name (or key) and a value.
 * A property's value can be a function, in which case the property is known as a method.
 */

// Create new object
// Using object initializers
var obj1 = new Object();
obj1.key1 = "value1";
obj1.key2 = "value2";
obj1.func1 = function() { console.log("func1"); }
console.log(obj1);

// Using JSON
var obj2 = {
	key1: "value1",
	key2: "value2"
};
obj2["key3"] = "value3";
console.log(obj2);

// Using a constructor function
function Constructor() {
	this.key1 = "value1";
	this.key2 = "value2";
	this.func1 = function() {
		console.log("func1");
	}
}
var obj3 = new Constructor();
obj3.key3 = "value3";
console.dir(obj3);
console.log(obj3 instanceof Constructor)

// Using the Object.create method
var Temple = {
	key1: "value1",
	key2: "value2"
}
var obj4 = Object.create(Temple)
obj4.key3 = "value3";
console.log("obj4 key1 value: " + obj4.key1);

// Using factory pattern
function createObj(value) {
	return {
		key1: value
	}
}
var obj5 = createObj("value1");
var obj6 = createObj("value2");
console.log(obj5.key1);
console.log(obj6.key1);

// enumerate the properties of an object
for (let props in obj1) {
	console.log(`${props} - ${obj1[props]}`);
}

console.log(Object.keys(obj3)); // get enumerable properties names
console.log(Object.getOwnPropertyNames(obj3)); // get all own properties names

// let arr2 = [1, 2, 3, 4 ]
// console.log(Object.keys(arr2));
// console.log(Object.getOwnPropertyNames(arr2));