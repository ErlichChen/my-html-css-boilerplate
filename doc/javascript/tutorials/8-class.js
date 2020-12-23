// 构造函数模拟"类"，在其内部用this关键字指代实例对象
// 主要缺点是，比较复杂，用到了this和prototype
function Cls() {
  this.attr1 = "attr1";
}

// 实例的时候，使用new关键字
var obj1 = new Cls();
console.log(obj1.attr1);

// 类的属性和方法，还可以定义在构造函数的prototype对象之上
Cls.prototype.func1 = function() {
  console.log('func1');
}

// Object.create()方法
// 这种方法比"构造函数法"简单，但是不能实现私有属性和私有方法，实例对象之间也不能共享数据，对"类"的模拟不够全面
var Cls2 = {
  attr2: "attr2",
  func2: function() {
    console.log('func2');
  }
}

var obj2 = Object.create(Cls2);

// 极简主义法
var Cls3 = {
  createNew: function() {
    var cat = {};
    cat.name = "大毛";
    cat.makeSound = function(){ alert("喵喵喵"); };
    return cat;
  }
}

// 调用createNew()方法，就可以得到实例对象。
var cat1 = Cat.createNew();
cat1.makeSound(); // 喵喵喵

