## CommonJS

```js
// 定义模块math.js
var basicNum = 0;
function add(a, b) {
  return a + b;
}
module.exports = {
  add: add,
  basicNum: basicNum,
}

var math = require('./math');
math.add(2, 5);

var http = require('http');
http.createService(...).listen(3000);
```

## AMD和require.js

```html
<script src="js/require.js" data-main="js/main"></script>
```

```js
require.config({
  baseUrl: "js/lib",
  paths: {
    "jquery": "jquery.min",
    "underscore": "underscore.min",
  }
});

require(["jquery", "underscore"], function($, _){
  // some code here
});
```

## CMD和sea.js

```js
define(['a', 'b', 'c', 'd', 'e', 'f'], function(a, b, c, d, e, f) {
  if (false) {
    b.foo();
  }
})
```

```js
define([], function(a, b, c, d, e, f) {
  a.doSomething();
  if (false) {
    b.doSomething();
  }
});

define(function(require, exports, module) {
  var $ = require('jquery.js');
  var add = function(a, b) {
    return a + b;
  }
  exports.add = add;
});

seajs.use(['math.js'], function(math) {
  var sum = math.add(1 + 2);
})
```

