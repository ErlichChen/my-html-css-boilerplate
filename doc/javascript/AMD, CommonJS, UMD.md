## AMD

Asynchronnous Module Definition (AMD) has gained traction on the fontend, with RequireHJS being the most popular implementation.

Here's module **foo** with a single dependency on jquery:

```js
// filename: foo.js
define(['jquery'], function($){
  // methods
  function myFunc(){};
  // epxosed public methods
  return myFunc;
})
```

```js
// filename: foo.js
define(['jquery', 'underscore'], function($, _){
  // methods
  function a(){}; // private because it's not returned(see below)
  function b(){}; // public because it's returned
  function c(){}; // public because it's returned

  // exposed public methods
  return {
    b: b,
    c: c
  }
});
```

The first part of the define is an arry of dependencise, while the second part is essentially the callback function which is only executed when the dependencies are available (script loaders like RequireJS take care of that part, including figuring out where the files are located).

Note that the dependency to variable order is important.

Also note that we can map the dependencies to any arbitrary variables we want here. If we change $ to $$ in the code above, all jQuery references within our function block will be $$ instead of $.

And note, most importantly, that you can't reference the variables $ and _ outside of the function, because it's sandboxed from other code. That's the goal here!

## UMD

Since CommonJS and AMD styles have both been equally popular, it seems there's yet no consensus. This has brought about the push for a "universal" pattern that supports both styles, which brings us to none other than the Universal Module Definition.

The pattern is admittedly ugly, but is both AMD and CommonJS compatible, as well as supporting the old-style "global" variable definition:

```js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    //    methods
    function myFunc(){};

    //    exposed public method
    return myFunc;
}));
```

And keeping in the same pattern as the above examples, the more complicated case with multiple dependencies and multiple exposed methods:

```js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    //    methods
    function a(){};    //    private because it's not returned (see below)
    function b(){};    //    public because it's returned
    function c(){};    //    public because it's returned

    //    exposed public methods
    return {
        b: b,
        c: c
    }
}));
```

And keeping in the same pattern as the above examples, the more complicated case with multiple dependencies and multiple exposed methods:

```js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    //    methods
    function a(){};    //    private because it's not returned (see below)
    function b(){};    //    public because it's returned
    function c(){};    //    public because it's returned

    //    exposed public methods
    return {
        b: b,
        c: c
    }
}));
```