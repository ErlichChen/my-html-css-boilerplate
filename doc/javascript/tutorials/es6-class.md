# ES6 class

在 JavaScript 中：
* 一切皆对象
* 函数是一等公民

```js
function t() {}

t.__proto__ === Function.prototype  // true
t.__proto__.__proto__ === Object.prototype // true
```

函数是继承自 Object 的，因而函数也具备 toStirng、valueOf 等方法。因为函数是对象，所以在 ES6 之前，JavaScript 中的 OOP 编程则纯粹是基于函数的，直到 ES6 提供了 class、super 以及 extends 等关键字，不仅精简了语法，也使得 OOP 的编程形式逐渐趋近于 Java/C++ 等语言。

## class

ES6 虽然提供了 class 等关键字，但只是语法糖，JavaScript 的 OOP 编程仍然是基于函数的，继承则是基于原型的。

```js
class A {
	print() {
		console.log('print a');
	}
}
```

babel转换

```js
var A = function() {
	function A() {
		_classCallCheck(this, A);
	}

	_createClass(A, [{
		key: 'print',
		value: funtion print() {
			console.log('print a');
		}
	}]);
	return A;
}();
```

```js
function _classCallback(instance, Constructor) {
	if (!instance instanceof Constructor) {
		throw new TypeError("Cannot call a class as a function");
	}
}
A() // throw a error
const a = new A(); // work well
```

_createClass的作用

```js
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps); return Constructor;
  };
}();
```

createClass 的功能主要是通过 Object.defineProperty 定义了类的普通属性和静态属性。需要注意的是普通属性是定义在了类的原型对象上，静态属性是定义在了类本身上。

```js
function A() { }
A.prototype.print = function() {
	console.log('print a');
}
```

## Method

方式一是常规方式，方式二是通过箭头函数来定义方法。
箭头函数的写法就类似给类定义了 public method fields 是需要配置 transform-class-properties

```js
class A {
	print() {
		console.log('print a');
	}
}

class B {
	print = () => {
		console.log('print b');
	}
}

console a = new A()
a.print();

const b = new B()
b.print()
```

### this 的绑定

在箭头函数出现之前，每个新定义的函数都有它自己的this值，但箭头函数不会创建自己的this，它从会从自己的作用域链的上一层继承 this。
当点击 div 元素时，会触发 testClick，该方法会输出当前的 this，而(严格模式下)此时输出的 this 值是 undefined，显然这不是我们要的结果。怎么修改呢？这里至少有三种修改方式，其中之一就是通过箭头函数来定义方式。

```js
import React, { Component } from 'react';
class Test extends Component {
	testClick() {
		console.log('testClick', this);
	}

	render() {
		return <div onClick={ this.testClick}>Test</div>
	}
}
```

### 继承

```js
class A {
	print() {
		console.log('print a');
	}
}

class C extends A {
	print() {
		super.print();
		console.log('print c');
	}
}

const c = new C();
c.print();
// print a
// print c
```

上述结果的输出应该没有什么疑问，这是符合我们预期的。

```js
class B {
	print = () => {
		console.log('print b');
	}
}

class D extends B {
	print() {
		super.print();
		console.log('print d');
	}
}

const d = new D();
d.print();
```

类的继承依然是基于原型的。上文也分析过babel转换过的代码，常规的写法中，类的非静态属性都是定义在类的原型对象上，而不是类的实例上的。但箭头函数不一样，通过箭头函数定义的方法时绑定在this上，而this是指向当前创建的类实例对象，而不是类的原型对象。

```js
var B = function B() {
	_classCallCheck(this, B);

	this.print = function () {
		console.log('print b');
	};
}
```

可以看到，print方法是定义在this上的，而不是定义在B.prototype上。
类D继承B，不仅会继承类B原型上的属性和方法，也会继承其实例上的属性和方法。

```js
function D() {
	this.print = function() {
		console.log('print d');
	}
}

// 通过原型实现继承
D.__proto__ = B;
D.prototype.__proto__ === B.prototype;

D.prototype.print = function () {
    // 类 D 自身定义的 print 方法
}
const d = new D();
d.print();
```

当d.print()执行时，只会输出print b，而不会输出print d。
因为当访问一个对象实例的属性时，会先在实例上进行查找，如果没有，则顺着原型链往上查找，直到原型链的顶端。若在实例上查找到对应属性，则会返回，停止查找。即使原型上定义了同一个属性，该属性也不会被访问到，这种情况称为"属性遮蔽(property shadowing)"。