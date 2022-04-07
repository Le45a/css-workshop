# CSS WorkShop

## css盒模型

### 盒模型

  css盒模型分为两种：标准盒模型和怪异盒模型(IE盒模型)

  区别：计算宽高的方式不一样

  标准盒模型：width=content

  怪异盒模型：width=content+padding+border

<div>
　<img width='400' height='250' src='img/normal-box.jpeg'></img>
  <img width='400' height='250' src='img/ie-box.jpeg'></img>
</div>　　

　　如何设置：通过box-sizing设置

<p style='margin-left:20px; padding:20px; background:lightblue;border-radius:4px'><b>Tip</b>
border-box的作用:当我们希望无论如何改动border，width与padding的值，都不会导致box总尺寸发生变化时可以使用。比如在水平布局有多个div，然后各占50%，然后不管你怎么设置border和padding，他都不会被挤到下一行。
</p>

### BFC

　　BFC:块格式化上下文（Block Formatting Context，BFC） 是 Web 页面的可视化 CSS 渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
　　目的：形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素。

<div style='text-align:center'>
  <a href='/demo1' target='_blank'>示例一</a>
</div>

　　创建BFC的方式：

 <img width='500' height='200' src='img/bfc.png'></img>

## normalize

### 需要原因

        1. html标签有默认属性

        2. 各个浏览器对默认属性的解释会有不同而造成视觉效果不同。

### 和css reset的区别

    1. 保留了默认的浏览器样式

    Normalize.css保留了许多浏览器有用的默认样式，而不需要重新去定义。其旨在使那些不同的浏览器风格一致

    2. 修复了常见的Bug

    Normalize解决了常见的PC和移动端的样式Bug，包括HTML5显示的元素、预定义格式的字体大小、IE9中的SVG溢出等

    3. 不会使得调试更加的麻烦

    Resets会使用大量的继承链，这样会使得调试时元素非常的混乱。而normalize会非常谨慎的使用多个选择器。

    4. 模块化的样式

    normalize.css每个样式的修改都是一个独立的元素选择器，这有利于快速的修改网站所需的样式内容。

## css选择器和优先级

<div style='text-align:center;'>
 <a href='https://www.w3school.com.cn/cssref/css_selectors.asp' target='_blank'>全部</a>
 <a style='margin-left:20px;' href='https://www.w3school.com.cn/css/css_pseudo_classes.asp' target='_blank'>伪类和伪元素</a>
</div>

### 优先级

<img width='400' height='200' src='img/css-specificity.jpg'></img>

```
关于!important的使用

  总是先考虑使用权重更高的 css 选择器, 而不是使用!important

　只有当你的目的是覆盖来自第三方的 css(如: Bootstrap,normalize.css)时, 才在页面范围使用 !important

  永远不要 在你写一个第三方插件时使用 !important

  永远不要在全站范围使用 !important
```

<div style='text-align:center;margin-top:10px'>
   <a href='/demo5' target='_blank'>示例二</a>
</div>

## css布局

### 浮动布局

　　浮动被用来将盒子（box）置于左侧或右侧，同时让内容环绕其展示。

　　要让一个元素进行浮动，需要为该元素设置一个值为left或right的float属性。默认值为none。

<div style='text-align:center'>
 <a href='/demo2' target='_blank'>浮动布局</a>
</div>

### 定位

  1. 相对定位：按照正常文档流进行偏移
  2. 绝对定位：将其完全从正常流中移除。其原本占据的空间也会被移除。该元素会定位会相对于视口容器，除非其某个祖先元素也是定位元素
  3. 固定定位：会相对于视口定位，并且会从正常文档流中被移除，不会保留它所占据的空间。当页面滚动时，固定的元素会留在相对于视口的位置，而其他正常流中的内容则和通常一样滚动。
  4. 粘性定位：会让元素在页面滚动时如同在正常流中，但当其滚动到相对于视口的某个特定位置时就会固定在屏幕上，如同fixed一般。这个属性值是一个较新的CSS属性，在浏览器兼容性上会差一些，但在不兼容的浏览器中会被忽略并会退到正常的滚动情况

  <div style='text-align:center;margin-top:20px'>
      <a href='/demo3' target='_blank'>定位</a>
  </div>

### 弹性布局

　　display：flex

#### 弹性盒子的轴

　　flex-direction：主轴

#### 其他属性

  1. flex-grow：容器有剩余空间时允许拉伸比例
  2. flex-shrink：容器空间不足时被压缩的比例。
  3. flex-basis：会为弹性项设置未拉伸和压缩时的初始大小。

简写:flex:flex-glow flex-shrink flex-basis
  <div style='text-align:center;margin-top:20px'>
      <a href='/demo4' target='_blank'>flex</a>
  </div>

### 网格布局

　　CSS网格布局（grid layout）是一种用来进行二维布局的技术。二维（two-dimesional）意味着你希望按照行和列来排布你的内容。和弹性盒子类似，网格布局也需要设置一个display值。你可以为容器元素设置display: grid，并且使用grid-template-columns和grid-template-rows属性来控制网格中的行与列。

## 自适应

### 媒体查询

```
@media screen and ( min/max width:760px)
```
rem等单位
  postcss-px-to-viewport方案
[练习一](/index)
