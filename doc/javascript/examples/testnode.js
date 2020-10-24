//global.Promise = require('bluebird').Promise;

console.log('node version:',process.version);
const co = require('co');
function* testfun_co(){
    let total = 0;
    for(let i = 0;i<10000;i++){
        total += yield done=>done(null,i);
    }
    console.log('total:',total);
}

co(function*(){

    console.time('bench origin');
    yield *testfun_co();
    yield *testfun_co();
    console.timeEnd('bench origin');


}).then(ret=>console.log('all test end'));

// 对于8.x版本的node,可能只有 promisify 还有用?
// 不过 node8.0加入了一个新API util.promisify …
// 还在使用老版本node的同学可以继续用bluebird以提升性能