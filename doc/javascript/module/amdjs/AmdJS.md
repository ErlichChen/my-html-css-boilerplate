# AmdJS

AMD是Asynchronous Module Definition

AMD是 RequireJS 在推广过程中对模块定义的规范化产出。

鉴于浏览器的特殊情况，又出现了一个规范，这个规范呢可以实现异步加载依赖模块，并且会提前加载那就是AMD规范。

其核心接口是：define(id?, dependencies?, factory) ，它要在声明模块的时候指定所有的依赖 dependencies ，并且还要当做形参传到factory 中，对于依赖的模块提前执行，依赖前置。

define("module", ["dep1", "dep2"], function(d1, d2) {
  return someExportedValue;
});
require(["module", "../file"], function(module, file) { /* ... */ });
优点：在浏览器环境中异步加载模块；并行加载多个模块；

缺点：开发成本高，代码的阅读和书写比较困难，模块定义方式的语义不顺畅；不符合通用的模块化思维方式，是一种妥协的实现；

实现：RequireJS； curl；