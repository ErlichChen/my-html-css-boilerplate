# Inheritance and the prototype chain

JavaScript is dynamic and does not provide a class implementation. the class keyword is syntactical sugar, it remains prototype-based.

JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype.

That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.

Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.

## Inheritance with the prototype chain

### Inheriting properties

JavaScript objects are dynamic properties. Its objects have al link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end to the prototype chain is reached.

```js
let f = function() {
	this.a = 1;
	this.b = 2;
}
// or
function f() {
	this.a = 1;
	this.b = 2;
}

let o = new f();
f.prototype.b = 3;
f.prototype.b = 4;

console.log(o.a);

```

### Inheriting methods

## Using prototypes in JavaScript


## Different ways to create objects and the resulting prototype chain