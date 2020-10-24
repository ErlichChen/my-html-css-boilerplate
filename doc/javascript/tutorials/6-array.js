
/**
 * Create an array
 */
let arr1 = new Array();
let arr2 = Array(1, 2);
let arr3 = [1, 2, 3]; // array literal is shorter than other forms of array creation, and so is generally preferred.
let arr4 = Array.of(1);
console.log("new Array:   " + arr1 + " length: " + arr1.length);
console.log("Array(1):    " + arr2 + " length: " + arr2.length);
console.log("[1, 2, 3]:   " + arr3 + " length: " + arr3.length);
console.log("Array.of(1): " + arr4 + " length: " + arr4.length);

/**
 * Populate an array by assigning values to its elements.
 */
let arr5 = [];
arr5[0] = "1";
console.log(arr5);
arr5[1.1] = "1"; // If you supply a non-integer value to the array, a property will be created in the object representing the array, instead of an array element.
console.log("the array is ", arr5 + " but the lenght is still " + arr5.length);

/**
 * Refer to an array's elements by using the element's ordinal number
 */
let arr6 = ['one', 'two', 'three'];
console.log("the array 6 is " + arr6 + ", the first element is " + arr6[0]);
console.log("the array length: " + arr6['length']);
// Understanding length
// Javascript arrays actully store their elements as standard object properties, using the array index as the property name.
// The length property is special. It always returns the index of the last element plus one.
arr6.length = 0;
console.log(arr6);

/**
 * Iterate over arrays
 */
arr6 = ['one', 'two', ,'three'];
for (let i = 0; i < arr6.length; i++) {
	console.log("The arr6 " + i + " element: " + arr6[i]);
}

// unassigned values are not iterated in a forEach loop
// note that elements of an array that are omitted when the array is defined are not listed when iterating by forEach,
// but are listed when undefined has been manually assigned to the element.
arr6.forEach(function(element) {
	console.log("The arr6 element: " + element);
});

arr6 = ['one', 'two', undefined,'three'];
// shorten code with ES2015 arrow function
arr6.forEach((element) => {
	console.log("The arr6 element: " + element);
});

// if you know that none of the elements in your array evaluate to false in a boolean context, if your array consists only of DOM nodes.
// let divs = document.getElementsByTagName("div");
// for (let i = 0, div; div = divs[i]; i++) {
// 	/* Process div in some way */
// }
// this avoids the overhead of checking the length of the array,
// and ensures that div variable is reassigned to the current item each time around the loop for added convenience.

/**
 * Array methods
 */

// concat() joins two or more arrays and returns a new array
let arr8 = [1, 2, 3];
arr8 = arr8.concat("a", "b", "c");
console.log(arr8);

// join() joins all elements of an array into a string
let arr9 = arr8.join("-");
console.log(arr9);

// push() adds one or more elements to the end of an array and returns the resulting length of the array
arr8.push(4);
console.log(arr8);

// pop() removes the last element from an array and returns that element
let last = arr8.pop();
console.log("remove the last element: " + last + " the final arr8: " + arr8);

// shift() removes the first element from an array and returns that element
let first = arr8.shift();
console.log(arr8);

// unshift() adds one or more elements to the front of an array and returns the new length of the array
arr8.unshift(1);
console.log(arr8);

// slice() extracts a section of an array and returns a new array
let arr10 = arr8.slice(1, 4);
console.log(arr10);

// splice() removes elements from an array and replaces them
arr8.splice(3, 3, ...[6, 5, 4]);
console.log(arr8);

// reverse() transpose the elements of an array
arr8.reverse();
console.log(arr8);

// sort() sorts the elements of an array in place, and returns a reference to the array
arr8.sort();
console.log(arr8);
// sort() can aslo take a callback function to determine how array elements are compared
arr8.sort((a, b) => {
	return a > b ? b : a;
});
console.log(arr8);

// indexOf() search the array and returns the index of the first match
let arr11 = ['a', 'b', 'a', 'b', 'a'];
console.log(arr11.indexOf("a"));
console.log(arr11.indexOf("a", 1));

// lastIndexOf() starts at the end and searches backwards
console.log(arr11.lastIndexOf("a"));
console.log(arr11.lastIndexOf("a", 1));

// map() returns a new array of the return value from executing callback on every array item
let arr12 = arr11.map((item) => {
	return item.toUpperCase();
});
console.log(arr12);

// filter() returns a new array containing the items for which callback returned true
let arr13 = arr11.filter((item) => {
	return typeof item === 'string' && item === 'a';
});
console.log(arr13);

// every() returns true if callback returns true for every item in the array
console.log(arr13.every((item) => {
	return typeof item === "string";
}));

// some() return true if callback returns true for at least one item in the array
console.log(arr13.concat(1).some((item) => {
	return typeof item === "number";
}));

// reduce() applies for each value in the array for the purpse of reducing the list of items down to a single value
let sum = arr8.reduce((item1, item2) => {
	return item1 + item2;
});
console.log(sum);

// bubble sort
let arr7 = [10, 0, 100, 20, 60, 30];
console.log("the inital array: " + arr7 + " time: " + new Date().getTime());
for (let i = 0; i < arr7.length; i++) {
	for (let j = 0; j < arr7.length - i; j++) {
		if (arr7[j] > arr7[j+1]) {
			let temp  = arr7[j];
			arr7[j]   = arr7[j+1];
			arr7[j+1] = temp;
		}
	}
}
console.log("the sorted array: " + arr7 + " time: " + new Date().getTime());