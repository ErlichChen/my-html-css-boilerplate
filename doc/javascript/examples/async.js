const co = require('co');
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    // setTimeout(() => {
    //   resolve('resolved');
		// }, 2000);

		let total = 0;
    for(let i = 0;i<10000;i++){
        total += 1
		}
		for(let i = 0;i<10000;i++){
			total += 1
	}
		console.log('total:',total);
		resolve('resolved');
  });
}

async function asyncCall() {
  console.time('bench origin');
  var result = await resolveAfter2Seconds();
  console.timeEnd('bench origin');
  // expected output: 'resolved'
}

asyncCall();

var resolveAfter2Seconds = function() {
  console.log("starting slow promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

var resolveAfter1Second = function() {
  console.log("starting fast promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

var sequentialStart = async function() {
  console.log('==SEQUENTIAL START==');

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second();
  console.log(fast); // 3. this runs 3 seconds after 1.
}

var concurrentStart = async function() {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second(); // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow); // 2. this runs 2 seconds after 1.
  console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

var concurrentPromise = function() {
  console.log('==CONCURRENT START with Promise.all==');
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
    console.log(messages[0]); // slow
    console.log(messages[1]); // fast
  });
}

var parallel = async function() {
  console.log('==PARALLEL with await Promise.all==');

  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
      (async()=>console.log(await resolveAfter2Seconds()))(),
      (async()=>console.log(await resolveAfter1Second()))()
  ]);
}

// This function does not handle errors. See warning below!
var parallelPromise = function() {
  console.log('==PARALLEL with Promise.then==');
  resolveAfter2Seconds().then((message)=>console.log(message));
  resolveAfter1Second().then((message)=>console.log(message));
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000); // same as concurrentStart

// wait again
setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"

// wait again
setTimeout(parallelPromise, 13000); // same as parallel

// 用race给某个异步请求设置超时时间，并且在超时后执行相应的操作
//请求某个图片资源
function requestImg(){
	var p = new Promise(function(resolve, reject){
			var img = new Image();
			img.onload = function(){
					resolve(img);
			}
			img.src = 'xxxxxx';
	});
	return p;
}

//延时函数，用于给请求计时
function timeout(){
	var p = new Promise(function(resolve, reject){
			setTimeout(function(){
					reject('图片请求超时');
			}, 5000);
	});
	return p;
}

Promise
.race([requestImg(), timeout()])
.then(function(results){
	console.log(results);
})
.catch(function(reason){
	console.log(reason);
});

Promise.resolve().then(func1).then(func2).then(func3);

[func1, func2, func3].reduce((p, f) => p.then(f), Promise.resolve())
.then(result3 => { /* use result3 */ });