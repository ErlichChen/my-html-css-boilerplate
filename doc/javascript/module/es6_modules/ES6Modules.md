# ES6 Module

ES6 Module是语言层面的, 导入导出是声明式的代码集合. 声明式的意思就是说, 直接利用关键字声明说我要导入/导出一个模块啦, 而不是粗鄙(节目效果)地将一个对象赋值给一个变量, 例如

import {a, b} from './moduleName'
再看看不是声明式的例子

let a = require('moduleName')
相比声明式, 代码集合才是我们最该关注的点. 看如下代码:

// circle.js
export const PI = 3.14
export let radius = 5
export let getArea = (r) => PI * r * r

S6 Module会将添加了export关键字的变量/函数等(以下简称数据)添加到一个集合中, 并记录下这些数据的内存地址, 所以这个集合就做了两件事:

1. 哪些数据是可以导出的

2. 导出的数据, 内存地址是多少

然后, 在导入的时候, 再将父模块(导入这个模块的模块)import时声明的数据名称指向对应导出数据的内存地址, 形成一个链接. 假设有这样的导入代码:

import {PI, radius, getArea} from './circle'
首先, 在编译阶段(代码正式运行之前, 而CommonJS必须在运行时), 静态分析时看到这样的语句, 就会先分别检查PI, radius, getArea是否在circle模块的""导出代码"这个集合中, 如果存在, 则将各自的内容指向"导出代码"集合中各自对应的内存地址, 类似于指针(如果你还不了解指针, 那么你就对比一下值传递和地址传递, 做一个可意会不可言传的理解, 当然, 更建议去了解一下指针的概念).


ES6 Module最基本的导入导出, 可以看出, 这样导入导出的一大缺点就是, 如果我要import一个模块, 就必须知道他export了哪些数据, 不然根本就没法导入. 要解决这个问题, 有两个方法:

1.

import * as circle from './circle'
这样就能成功引入了, 什么! ? 你还想调用, 你当初可只说导入, 没说要调用吼!!! :(

2. 利用export default

export default getArea = (r) => PI * r * r
或

let getArea = (r) => PI * r * r

// 导出列表, ES6 Module的另一种导出方式
export {
    getArea as default
}

导入时

import default as getArea from './circle'
或

import getArea from './circle'
一般情况下第二种import方式用得更多一些.


这就是ES6 Module的default关键字, 它的作用就是将一个数据命名为default, 无论是直接添加export关键字还是用别名的方式, 需要注意的是, export default的作用, 是用default关键字将导出的数据命名为default, 这个default是一个关键字, 不要萌萌地想要用export blabla ... 这种方式给导出的数据起别名, 要起别名, 请用导出列表的方式, 这个导出列表只要在模块的顶层, 无论是在代码的开始, 结束, 还是中间的任何地方都可以. 而且不仅导出时可以起别名, 导入时也可以起别名. 就拿刚才的那个例子来说:

import * as circle from './circle'
这样是可以的, circle就是一个对象, 叫做模块对象, 导出列表的数据就成了circle对象的属性, 至于要怎么调用, 也必须知道导出的数据是什么才可以(毕竟你必须要知道对象的属性才能调用).

聪明的你一定知道, import 时起别名还可以针对单个数据

import {PI as pai, radius as r} circle from './circle'
最后要说的是ES6 Module的一个骚操作——聚合模块.

我们设想这么一个场景: 我有一个main.js模块, 这个模块需要引入50个模块后再导出(这样, 我只要引入这一个模块就相当于引入了50个模块), 而且并不是每个模块中的每个数据都需要导入, 比如我有一个foo模块, 它导出了{a, b, c}三个数据, 但是我只需要他的{a}.

这样的需求用ES6 Module可以这样实现:

import {a} from './foo'

/* *
 * ...
 * import 其他模块
 * */

export {
    a,
    /*... 导出其他模块*/
}
这样的确可以实现, 但是看起来太过粗俗. 可以换一种实现方式, 利用export... from...

export {a} from './foo'
export * from './bar'
哇, 一下子少写了那么多行代码. 简直开心得在地上打滚儿吼!

但是这样的写法有两个点需要注意:

1. 这样的方式不会讲数据添加到该聚合模块的作用域, 也就是说, 你无法在该模块中使用a.

2. 如果export的数据名相同, 会产生冲突, 所以尽量不要使用export * 这种危险的操作, 因为你根本不知道*里有没有数据名与其他数据冲突