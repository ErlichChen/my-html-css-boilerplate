# CSS 布局

## 默认布局流

默认布局流动是指在不对网页惊醒任何布局控制的时，浏览器默认的HTML布局方式。
HTML元素完全按照源代码中出现的先后顺序显示。

## 浮动

float属性

* left:    浮动到左侧
* right:   浮动到右侧
* none:    默认是不浮动
* inherit: 继承父元素的浮动属性

## 定位

### 静态定位

默认的文档布局流。

### 相对定位

相对定位通常用来对布局进行微调。

### 绝对定位

绝对定位用于将元素移动到web页面的任何位置，以创建复杂的布局。

### 固定定位

与绝对定位非常类似，除了它是将一个元素相对浏览器视口固定，而不是相对另外一个元素。

## 弹性布局

* 主轴是沿着flex元素放置的方向延伸的轴。该轴的开始和结束被称为main start和main end。
* 交叉轴是垂直于flex元素放置方向的轴。该轴的开始和结束被称为cross start和cross end。
* 设置了display: flex的父元素称之为flex容器。

### 行列

flex-direction指定了主轴的方向，默认值是row。

```css
/* row, row-reverse, column, column-reverse */
flex-direction: column
```

### 换行

当布局中使用定宽或者定高的时候，可能会有一个问题出来即处于容器中的子元素会溢出。
解决这个问题方法是添加规则

```css
flex-wrap: wrap;
flex: 200px;
```

#### flex-flow 缩写

```css
flex-flow: row wrap;
```

### flex项的动态尺寸

指定一个无单位的比例值，表示每个flex项沿主轴的可用空间大小，指定 flex 的最小值。

```css
div {
  flex: 1 200px;
}
```

### 水平和垂直对齐

```css
/* stretch, center, flex-start, flex-end, space-between, space-around */
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

### flex 项排序

所有flex项默认的order值是0，值越大显示顺序中更靠后。

```css
button:first-child {
  order: 1;
}
button:last-child {
  order: -1;
}
```