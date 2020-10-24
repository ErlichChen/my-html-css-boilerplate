/**
 * JavaScript is case-sensitive and uses the unicdoe charactor set.
 * The source text of JavaScript script gets scanned from left to right and is converted into a sequence of input element
 * which are tokens, contorl characters, line terminators, comments, or whitespace.
 * Spaces, tabs, and newline characters are considers whitespace.
 */

/**
 * Declarations
 */

// var declares a variable, optionally initializing it to a value.
// var can be used to declare both local and global variables, depending on the execution context.
var x = 1;

// let declares a block-scoped, local variable, optionally initializing it to a value.
// const declares a block-scoped, read-only named constant.
const y = 2;
let z = 3;

// undefined
var a;
console.log('The value of a is ' + a); // The value of a is undefined
console.log('The value of b is ' + b); // The value of b is undefined
var b;

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined
console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;

var input;
if (input === undefined) { }
else { }

var myArray = [];
if (!myArray[0]) { }; // myArray element is undefined

var a;
a + 2;  // Evaluates to NaN

var n = null;
console.log(n * 32); // log 0 to the console

// variable scope
if (true) {
  var x = 5;
}
console.log(x);  // x is 5

if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y is not defined

// Variable & Function hoisting

// Example 1
console.log(x === undefined); // true
var x = 3;

// Example 2
// will return a value of undefined
var myvar = 'my value';
(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();
// Because of hoisting, all var statements in a function should be placed as near to the top of the function as possible.

// let and const are hoisted but not initialized.
console.log(x); // ReferenceError
let x = 3;

/* Function declaration */
foo(); // "bar"
function foo() {
  console.log('bar');
}

/* Function expression */
baz(); // TypeError: baz is not a function
var baz = function() {
  console.log('bar2');
};

/**
 * Data and types
 */

var flag = true;  // boolean
var nll  = null;  // null
var undef;        // undefined
var num  = 10;    // number
var bignum = 9007199254740992n; // bigint
var str = "str";  // string
var obj = new Object(); // object

console.log(typeof flag);   //boolean
console.log(String(nll));   //null
console.log(typeof nll);    //not null
console.log(typeof undef);  //undefined
console.log(typeof num);    //number
console.log(typeof bignum); //bigint
console.log(typeof str);    //string
console.log(typeof obj);    //object

// converting strings to numbers
parseInt('101', 2); // 5 binary to decimal
parseFloat('1.1');
// An alternative method of retrieving a number from a string is with the + (unary plus) operator
(+'1.1') + (+'1.1'); // 2.2

/**
 * Literals
 * 1. Array
 * 2. Boolean
 * 3. Floating-point
 * 4. Numeric literals
 * 5. Object literals
 * 6. RegExp literals
 * 7. String literals
 */

// Array
var arr = ['item1', 'item2', 'item3'];
var arr1 = ['item1', '', 'item3']; // arr1[1] is undefined

// Boolean
// The Boolean type has two literal values: true and false.

// Numeric literals
// Number and BigInt types can be expressed decimal(base 10)
// hexadecimal(base 16)
// octal(base 8)
// binary(base 2)
0, 117, -345, 123456789123456789n;            // decimal, base 10
015, 0001, -0o77, 0o777777777777n;            // octal, base 8
0x1123, 0x00111, -0xF1A7, 0x123456789ABCDEFn; // hexadecimal, "hex" or base 16
0b11, 0b0011, -0b11, 0b11101001010101010101n; // binary, base 2

// Floating-point


    //类型转换


    //其他类型转数字类型:三种方式:
    //1.parseInt();//转整数

    //    console.log(parseInt("10"));//10
    //    console.log(parseInt("10afrswfdsf"));//10
    //    console.log(parseInt("g10"));//NaN
    //    console.log(parseInt("1fds0"));//1
    //    console.log(parseInt("10.98"));//10
    //    console.log(parseInt("10.98fdsfd"));//10

    //2.parseFloat()//转小数

    //    console.log(parseFloat("10"));//10
    //    console.log(parseFloat("10afrswfdsf"));//10
    //    console.log(parseFloat("g10"));//NaN
    //    console.log(parseFloat("1fds0"));//1
    //    console.log(parseFloat("10.98"));//10.98
    //    console.log(parseFloat("10.98fdsfd"));//10.98
    //3.Number();//转数字
//    console.log(Number("10"));//10
//    console.log(Number("10afrswfdsf"));//NaN
//    console.log(Number("g10"));//NaN
//    console.log(Number("1fds0"));//NaN
//    console.log(Number("10.98"));//10.98
//    console.log(Number("10.98fdsfd"));//NaN

    //总结:想要转整数用parseInt(),想要转小数用parseFloat()
    //想要转数字:Number();要比上面的两种方式严格

    //其他类型转字符串类型
    //1    .toString()

//    var num=10;
//    console.log(num.toString());//字符串类型
//    //2  String();
//
//    var num1=20;
//    console.log(String(num1));

    //如果变量有意义调用.toString()使用转换
    //如果变量没有意义使用String()转换

//    var num2;
//    console.log(num2.toString());
//    var num3=null;
//    console.log(num3.toString());

    //这个可以
//    var num2;
//    console.log(String(num2));
//    var num3=null;
//    console.log(String(num3));


    //其他类型转布尔类型

    //1  Boolean(值);
//
//    console.log(Boolean(1));//true
//    console.log(Boolean(0));//false
//    console.log(Boolean(11));//true
//    console.log(Boolean(-10));//true
//    console.log(Boolean("哈哈"));//true
//    console.log(Boolean(""));//false
//    console.log(Boolean(null));//false
//    console.log(Boolean(undefined));//false


//    var str=10;
//    console.log(+str);


//变量的交换的第一个思路:使用第三方的变量进行交换
//    var num1=10;
//    var num2=20;
//   //把num1这个变量的值取出来放在temp变量中
//    var temp=num1;
//   //把num2这个变量的值取出来放在num1变量中
//    num1=num2;
//   //把temp变量的值取出来放在num2变量中
//    num2=temp;
//    console.log(num1);//20
//    console.log(num2);//10


//第二种方式交换:一般适用于数字的交换


//    var num1 = 10;
//    var num2 = 20;
//    //把num1的变量中的值和num2变量中的值,取出来相加,重新赋值给num1这个变量
//    num1 = num1 + num2;//30
//    //num1变量的值和num2变量的值取出来,相减的结果重新赋值给num2
//    num2 = num1 - num2;//10
//    //num1变量的值和num2变量的值取出来,相减的结果重新赋值给num1
//    num1 = num1 - num2;//20
//    console.log(num1, num2);



//注意；变量的名字是不能重名

//    var num1=10;
//    var num1=20;
//    console.log(num1);

//扩展的变量的交换:只需要看代码,不需要理解---位运算
var num1 = 10;
var num2 = 20;
num1 = num1 ^ num2;
num2 = num1 ^ num2;
num1 = num1 ^ num2;
console.log(num1, num2);

 //var num = 12;
    /*
    * 数字类型:整数和小数
    *
    * num=20;整数
    * num=98.76;小数(其他的语言中,浮点型---单精度,双精度浮点)
    * 所有的数字都是属于number类型
    * 其他的语言:
    * 整数类型:int
    * 单精度浮点型:float
    * 双精度浮点型:double
    *
    * 数字:
    * 二进制:遇到2进一
    *
    *   00000001-----1
    *   00000010-----2
    *   00000011-----3
    *   00000100-----4
    *   00000101----5
    *   00000110----6
    *   00000111-----7
    *   00001000-----8
    *   00001001----9
    * 八进制:遇到8进一
    *   00000001
    *   00000002
    *   00000003
    *   00000004
    *   00000005
    *   00000006
    *   00000007
    *   00000010-----8
    *   00000011-----9
    *   00000012-----10
    * 十进制:遇到10进一
    *   0
    *   1
    *   2
    *   3
    *   4
    *   5
    *   6
    *   7
    *   8
    *   9
    *   10
    * 十六进制:遇到f进一
    * 00000001
    * 00000002
    * 00000003
    * 00000004
    * 00000005
    * 00000006
    * 00000007
    * 00000008
    * 00000009
    * 0000000a----10
    * 0000000b---11
    * 0000000c----12
    * 0000000d---13
    * 0000000e---14
    * 0000000f---15
    * 00000010---16
    * 00000011---17
    * 00000012---18
    * 0f12a
    *
    * */


    /*
    *
    *
    * js中可以表示哪些进制
    * var num=10;//十进制
    * var num2=012;//八进制
    * var num3=0x123;//十六进制
    *
    *
    * */


//    var num=12;//十进制
//    console.log(num);
//    var num2=012;//八进制
//    console.log(num2);
//    var num3=0x1a;//十六进制
//    console.log(num3);


//    var num=0x1f;
//    console.log(num);


	//数字类型有范围: 最小值和最大值
//    console.log(Number.MAX_VALUE);//数字的最大值
//    console.log(Number.MIN_VALUE);//数字的最小值


	//不要用小数去验证小数.
//    var x=0.1;
//    var y=0.2;
//    var sum=x+y;
//    console.log(sum==0.3);


	//不要用NaN验证是不是NaN

//    var num;
//    console.log(num+10==NaN);
//    console.log("您好"=="我好");

	//如何验证这个结果是不是NaN,应该使用isNaN()

	//var num;//-----变量声明了,没有赋值,结果是:undefined
	//是不是不是一个数字----->不是一个数字吗？ NaN--->不是一个数字
	//console.log(isNaN(10));

	//判断结果不是一个数字可以使用isNaN(变量名)

	//var str="您好";
//    var num;
//    var sum=num+10;//NaN
//    console.log(sum);
//    console.log(isNaN(sum));//不是数字为true,是数字结果为false


	//总结:
	/*
	*
	* 数字类型:number类型
	* 无论是整数还是小数都是数字类型
	* 不要用小数验证小数
	* 不要使用NaN判断是不是NaN，应该使用isNaN(值或者是变量)
	* 想要表示十进制:就是正常的数字
	* 想要表示八进制:以0开头
	* 想要表示十六进制:0x开头
	*
	*
	*
	* */

	    //var str="10";//字符串
    //var str2='20';//字符串

    //字符串可以使用单引号,也可以使用双引号

    //字符串的长度如何获取? 变量名.length

    //    var str="what are you no sha lei";
    //    //字符串的个数有多少个?这个字符串的长度是多少
    //    console.log(str.length);
    //
    //    var str1="fdshfjworwoijpfskj;akjfpojfiwnmoiwajdoiwajiwaewowj";
    //    console.log(str1.length);

    //html中的转义符: <  &lt; > &gt; 空格: &nbsp;
    //js中的字符串里也有转义符

    //tab键----水平制表符
    //    console.log("哈哈\\嘎嘎");
    //    console.log("哈哈\t嘎嘎");
    //    console.log("哈哈\"嘎嘎");
    //
    //
    //    console.log('哈哈\'嘎嘎');


    //字符串的拼接: 使用+可以把多个字符串放在一起形成一个字符串
    //只要有一个是字符串,其他的是数字,那么结果也是拼接,不是相加
    //如果有一个是字符串,另一个不是字符串,使用- 号,此时会发生计算
    //    var str1="您好";
    //    var str2="我好";
    //    console.log(str1+str2);

    //console.log("哈哈"+"嘎嘎"+"嘿嘿");
    //    var str1="10";
    //    var str2="20";
    //    console.log(str1+str2);

    //    var str1="10";
    //    var str2=20;
    //    console.log(str1+str2);


//    var str1 = "10";
//    var str2 = 5;
//    //浏览器帮助我们自动的把字符串类型转成了数字类型,这种方式叫:隐式转换
//    console.log(str1-str2);

//    var str1="10";
//    var str2=5;
//    console.log(str1*str2);