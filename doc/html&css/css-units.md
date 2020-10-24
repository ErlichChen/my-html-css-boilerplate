# CSS Units

## 相对长度(Relative Lengths)

### em & rem

* em(Relative to the font-size of the element)

```html
<body>
  <div class="test">Test</div>
</body>
```

```css
body { font-size: 14px; }
div  { font-size: 1.2em; // calculated at 14px * 1.2, or 16.8px }
```

```html
<body>
  <div>
    Test <!-- 14 * 1.2 = 16.8px -->
    <div>
        Test <!-- 16.8 * 1.2 = 20.16px -->
        <div>
        Test <!-- 20.16 * 1.2 = 24.192px -->
        </div>
      </div>
  </div>
</body>
```

Each div inherits its font-size from its parent, giving us gradually increasing font-sizes.
每一个div都从它上一级父元素继承了字体大小，并且逐渐得增加。

* rem(Relative to font-size of the root element)

```css
html { font-size: 14px; }
div  { font-size: 1.2rem; }
```

### 适合网格布局(Good for Grids layout)

Rem aren't only useful for font size. You could base an entrie grid system or UI style library on the root HTML font-size using rem, and utilize scaling of em in specific places. This would give you more predictable font sizing and scaling.

Rem不仅仅用在设置字体方面。你可以基于html根元素字体大小的网格系统或者UI样式库，然后利用em的缩放在特定的位置。这样会给你更多的字体大小和缩放的可控性。

```css
.container {
  width: 70rem; // 70 * 14px = 980px
}
```

### vh & vw

* vw(Relative to 1% of the width of the viewport)
* vh(Relative to 1% of the height of the viewport)

Responsive web design tech rely heavily on percentage rules. CSS percentage isn't always the best solucation for every problem. CSS width is relative to the nearest containing parent element. You could use the width or height of the viewport instead of the width of the parent element that is **vh** and **vw** units provide.
响应式web设计严重依赖于百分比规则。CSS百分比不是所有问题的解决方案。CSS宽度相对于最近的上层的父元素。你可以使用窗口的宽度来代替元素的宽度，这正是vh和vw的作用。

```css
.slide {
  height: 100vh;
}
```

### vmin & vmax

* vmin(Relative to 1% of the viewport's smaller dimension)
* vmax(Relative to 1% of the viewport's larger dimension)

A square element that always touches at least two sides of the screen might be defined.
一个正方形元素可以触摸到至少两个边。

```css
.box {
    height: 100vmin;
    width: 100vmin;
}
```

A square box that always covers the visible viewport.
一个正方形可以覆盖整个视口。

```css
.box {
    height: 100vmax;
    width: 100vmax;
}
```

### ex & ch

The units **ex** and **ch**, rely on the current font and font size.

* ch(defined as the width of the zero character)
* ex(defined as the x-height of the current font OR one-half of one em)

## 绝对长度（Absolute Lengths）

cm - centimeters
mm - millimeters
in - inches(1in = 96px = 2.54cm)
px - pixels(1px = 1/96th of 1in)
pt - points(1pt = 1/72 of 1in)
pc - picas(1pc = 12 pt)

## Further Reading

[7 CSS Units You Might Not Know About](https://webdesign.tutsplus.com/articles/7-css-units-you-might-not-know-about--cms-22573)!