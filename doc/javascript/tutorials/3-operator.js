   /*
     *
     * 操作符:一些符号-----用来计算
     *
     * 算数运算符:  +  -  * / %
     * 算数运算表达式:由算数运算符连接起来的表达式
     * 一元运算符: 这个操作符只需要一个操作数就可以运算的符号  ++  --
     * 二元运算符: 这个操作符需要两个操作数就可以运算,
     * 三元运算符: -----不讲,明天讲
     * 复合运算符: +=  -=  *= /= %=
     * 复合运算表达式:由复合运算符连接起来的表达式
     *
     * var num=10;
     * num+=10;------>就是:num=num+10;
     * console.log(num);20
     *
     *
     * 关系运算符: >  <  >=  <=  ==不严格的 ===严格的 !=不严格的不等 !==严格的不等
     * 关系运算表达式:由关系运算符连接起来的表达式
     * 关系运算表达式的结果是布尔类型
     * 逻辑运算符:
     * &&---逻辑与--并且
     * ||---逻辑或---或者
     * !---逻辑非---取反--取非
     * 逻辑运算表达式:由逻辑运算符连接起来的表达式
     * 表达式1&&表达式2
     * 如果有一个为false,整个的结果就是false
     * 表达式1||表达式2
     * 如果有一个为true,整个的结果为true
     * !表达式1
     * 表达式1的结果是true,整个结果为false
     * 表达式1的结果是false,整个结果为true
     *
     * 赋值运算符:  =
     *
     *
     *
     *
     * */
	var num1=10;
	var num2=20;

	console.log(num1==num2&&5>6);

	var num=20;
	console.log(num>10||5<0);

	var flag=false;
	console.log(!flag);

	var num=10;
	var sum=(num+10)*5;
	console.log(sum);


	var result = (4 >= 6 || '人' != '狗' && !(12 * 2 == 144) && true);
	console.log(result);


	var num = 10;

	var result2 =( 5 == num / 2 && (2 + 2 * num).toString() === '22');
	console.log(result2);


	var num=20;
	var result=num/3;//num变量与3取余--->10/3的余数
	console.log(parseInt(result));


	var num=20;
	var result=num%3;//num变量与3取余--->10/3的余数
	console.log(result);


	var num=10;
	var sum=(num+10)+10;

	var num = 20;
	num %= 5;
	//    num=num-5;
	console.log(num);

	var str="5";
	var num=5;
	console.log(str===num);

	console.log(5>10);//false
	console.log(5>=5);//true
	console.log(5>3);//true
	console.log(5==10);//false



    //字面量: 把一个值直接赋值给一个变量

    //声明变量并初始化
	var num=10;

	var flag=true;

	var str="哈哈哈";

	var y=10;
	var n=y;
