# CmdJS

Common Module Definition 规范和 AMD 很相似，尽量保持简单，并与 CommonJS 和 Node.js 的 Modules 规范保持了很大的兼容性。

define(function(require, exports, module) {
  var $ = require('jquery');
  var Spinning = require('./spinning');
  exports.doSomething = ...
  module.exports = ...
})
优点：依赖就近，延迟执行 可以很容易在 Node.js 中运行；
缺点：依赖 SPM 打包，模块的加载逻辑偏重；
实现：Sea.js ；coolie