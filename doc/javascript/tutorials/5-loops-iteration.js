/**
 * Loops and iteration
 */

/**
 * A for loop repeate until a specified condition evaluates to false. The js for loop is similar to the java and c for loop.
 */

 // caculate the sum of all even and odd numbers between 1 - 100
 var sum1 = 0;
 var sum2 = 0;
 for(var i = 1; i <= 100; i++){
	 if(i % 2 == 0){ //even
		 sum1 += i;
	 } else { // odd
		 sum2 += i;
	 }
 }
 console.log(sum1); // 2550
 console.log(sum2); // 2500

 for(var i = 100; i <= 200; i++){
	if(i%7 == 0){
		console.log(i);
		break;
	} else {
		continue;
	}
}

 // print square
 for (var i = 0; i <= 5; i++) {
	for (var j = 0; j <= 5; j++) {
		process.stdout.write("★");
	}
	console.log("");
}

// print triangle
for (var i = 0; i <= 5; i++) {
	for (var j = 0; j <= i; j++) {
		process.stdout.write("★");
	}
	console.log("");
}

/**
 * A while statement executes its statements as long as specified consition evaluates to true
 */

// caculate the sum of numbers between 1-100
var sum = 0; // sum
var i = 1;   // counter
while (i <= 100) {
	sum+=i;
	i++;
}
console.log("sum: " + sum);


/**
 * The do while statement repeates unit a pecified condition evaluates to false.
 */

// do while
var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 0);

// bank interest
var salary = 10000;
console.log("salary per month: " + salary);
var money = 0;
var rate = 0.003;
for (var i = 0; i < 240; i++) {
	money += money * rate;
	money += salary;
	console.log("you will get %d in %d month", money, (i + 1));
}

// fibonacci rabbit
var preRabbits = 1;
var rabbits = 2;
var temp = 0;
for (var i = 0; i < 12; i++) {
	temp = rabbits;
	rabbits += preRabbits;
	preRabbits = temp;
}
console.log(rabbits);