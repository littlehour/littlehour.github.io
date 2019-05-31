[TOC]



实例见learn-vue

## 变量(Variables)

声明：

```less
@link-color: #428bca;
```



使用：

- 作为css属性值

- 以插值的形式在选择器名、属性名、URLs以及@import中使用

- 使用一个变量定义另一个变量的名字

  ```less
  //作为css属性值
  @link-color:        #428bca; // sea blue
  @link-color-hover:  darken(@link-color, 10%);
  a, .link {
    color: @link-color;
  }
  a:hover {
    color: @link-color-hover;
  }
  //编译结果：
  a, .link {
    color: #428bca;
  }
  a:hover {
    color: darken(@link-color, 10%);
  }
  
  
  //选择器名
  @my-selector: banner;
  .@{my-selector} {
    font-weight: bold;
    line-height: 40px;
    margin: 0 auto;
  }
  //编译结果：
  .banner {
    font-weight: bold;
    line-height: 40px;
    margin: 0 auto;
  }
  
  
  //属性名
  @property: color;
  .widget {
    @{property}: #0ee;
    background-@{property}: #999;
  }
  //编译结果：
  .widget {
    color: #0ee;
    background-color: #999;
  }
  
  
  //URLs
  @images: "../img";
  body {
    color: #444;
    background: url("@{images}/white-sand.png");
  }
  //编译结果：
  body {
      color: #444;
      background: url("../img/white-sand.png");
  }
  
  
  //@import
  //使用的变量只会在根作用域或当前作用域、当前文件以及被调用文件已经声明的变量中查找
  @themes: "../../src/themes";
  @import "@{themes}/tidal-wave.less";
  //编译结果：
  @themes: "../../src/themes";
  @import "../../src/themes/tidal-wave.less";
  
  
  //使用一个变量定义另一个变量的名字
  @primary:  green;
  @secondary: blue;
  .section {
    @color: primary;
    .element {
      color: @@color;
    }
  }
  //编译结果：
  .section .element {
    color: green;
  }
  ```



懒执行：

变量不用在使用之前声明；当多次定义一个变量时，会使用从当前作用域向根作用域找到的最后定义的变量

```less
//下面这些示例都是合法的
//示例1
.lazy-eval {
  width: @var;
}
@var: @a;
@a: 9%;
//编译结果
.lazy-eval {
  width: 9%;
}


//示例2
.lazy-eval {
  width: @var;
  @a: 9%;
}
@var: @a;
@a: 100%;
//编译结果：
.lazy-eval {
  width: 9%;
}


//示例3
@var: 0;
.class {
  @var: 1;
  .brass {
    @var: 2;
    three: @var;
    @var: 3;
  }
  one: @var;
}
//编译结果：
.class {
  one: 1;
}
.class .brass {
  three: 3;
}


//示例4
.header {
  --color: white;
  color: var(--color);  // the color is black
  --color: black;
}
//编译结果：
.header {
    color: black;
}
```



将css规则里面的属性当变量使用：

v3.0.0可以通过以$prop的形式，将css规则里面的属性当变量来使用，这种方式有时可以让你的代码更轻量。和变量一样，less也会选择当前作用域或父作用域最后的属性作为引用的最终值

```less
.widget {
  color: #efefef;
  background-color: $color;
}
//编译结果：
.widget {
  color: #efefef;
  background-color: #efefef;
}


//使用当前作用域或父作用域最后的属性作为最终值
.block {
  color: red; 
  .inner {
    background-color: $color; 
  }
  color: blue;  
}
//编译结果：
.block {
  color: red; 
  color: blue;  
}
.block .inner {
  background-color: blue; 
}
```



## 混入(Mixins)

混入提供了一种方式，将一个规则里面的所有声明包含进另一个规则

基本用法：

可以混入类选择器的规则，也可以混入id选择器的规则。在目前和历史版本中，混入调用后面的括号是可选的，但不推荐省略，因为在未来的版本，括号会是必须的

```less
.a, #b {
  color: red;
}
.mixin-class {
  .a();
}
.mixin-id {
  #b();
}
//编译结果：
.a, #b {
  color: red;
}
.mixin-class {
  color: red;
}
.mixin-id {
  color: red;
}
```



不输出混入：

如果你想在css（编译结果）中不输出混入，可以在混入的定义后面加上括号

```less
.my-mixin {
  color: black;
}
.my-other-mixin() {
  background: white;
}
.class {
  .my-mixin();
  .my-other-mixin();
}
//编译结果：
.my-mixin {
  color: black;
}
.class {
  color: black;
  background: white;
}
```



混入里面包含选择器：

Mixins可以包含的不仅仅是属性，它们也可以包含选择器

```less
.my-hover-mixin() {
  &:hover {
    border: 1px solid red;
  }
}
button {
  .my-hover-mixin();
}
//编译结果：
button:hover {
  border: 1px solid red;
}
```



命名空间：

如果你想混入一个比较复杂选择器的声明，你可以使用>或空格层叠多个id和class选择器；给你的混入加个命名空间，不但可以减少和其他库的混入或其他用户的混入的冲突，而且可以用来组织一组混入

```less
#my-library {
  .my-mixin() {
    color: black;
  }
}
// 使用方式1
.class {
  #my-library.my-mixin();
}
//使用方式2
.class {
  #my-library .my-mixin();
}
//使用方式3
.class {
  #my-library > .my-mixin();
}
//编译结果：
.class {
    color: black;
}
```



受保护的命名空间(Guarded Namespaces)：

在一个受保护的命名空间里面定义的混入，只有当保护条件为true时，该混入才会被使用，命名空间保护条件的计算方式和混入保护条件的计算方式基本上是一样的

```less
//下面这两个混入的效果是一样的
#namespace when (@mode = huge) {
  .mixin() { /* */ }
}
#namespace {
  .mixin() when (@mode = huge) { /* */ }
}

//下面这个混入永远不会执行
#sp_1 when (default()) {
  #sp_2 when (default()) {
    .mixin() when not(default()) { /* */ }
  }
}
```



！important关键字：

在混入调用的后面加上！important关键字，这样继承到的所有css声明都是！important的

```less
.foo (@bg: #f5f5f5, @color: #900) {
  background: @bg;
  color: @color;
}
.unimportant {
  .foo();
}
.important {
  .foo() !important;
}
//编译结果：
.unimportant {
  background: #f5f5f5;
  color: #900;
}
.important {
  background: #f5f5f5 !important;
  color: #900 !important;
}
```



混入传参：

混入也可以接受参数，这些参数就是调用混入时，传递给选择器块的变量；混入接受的参数也可以设置默认值

```less
//基本用法
.border-radius(@radius) {
  -webkit-border-radius: @radius;
     -moz-border-radius: @radius;
          border-radius: @radius;
}
#header {
  .border-radius(4px);
}
.button {
  .border-radius(6px);
}
//编译结果：
#header {
  -webkit-border-radius: 4px;
     -moz-border-radius: 4px;
          border-radius: 4px;
}
.button {
  -webkit-border-radius: 6px;
     -moz-border-radius: 6px;
          border-radius: 6px;
}


//参数设置默认值
.border-radius(@radius: 5px) {
  -webkit-border-radius: @radius;
     -moz-border-radius: @radius;
          border-radius: @radius;
}
#header {
  .border-radius();
}
//编译结果：
#header {
  -webkit-border-radius: 5px;
     -moz-border-radius: 5px;
          border-radius: 5px;
}
```

混入可以接受多个参数；参数要么用分号分隔，要么用逗号分隔，但推荐使用分号。因为逗号包含两层意思：既可以解析为混入参数的分隔符，也可以解析为css列表分隔符。使用逗号分隔符就无法将逗号分隔的一个列表作为一个参数；而且在混入调用或声明当中，如果有一个分号，编译器就会认为参数是使用分号分隔的，这时逗号就会被认为是css列表的分隔符：

+ .name(1, 2, 3; someting, else)两个参数，每个都是逗号分隔的列表
+ .name(1, 2, 3)三个参数，每个都是一个数字
+ .name(1, 2, 3;)一个参数
+ .name(@param1: red, blue;)一个参数，逗号分隔的一个默认

定义多个相同混入名、相同参数数量的混入是合法的。less会使用所有可以使用的声明，例如对包含一个参数的调用，那么只有必须传入一个参数的混入声明会被调用

```less
.mixin(@color) {
  color-1: @color;
}
.mixin(@color; @padding: 2) {
  color-2: @color;
  padding-2: @padding;
}
.mixin(@color; @padding; @margin: 2) {
  color-3: @color;
  padding-3: @padding;
  margin: @margin @margin @margin @margin;
}
.some .selector div {
  .mixin(#008000);
}
//编译结果：
.some .selector div {
  color-1: #008000;
  color-2: #008000;
  padding-2: 2;
}


.mixin2(@color) {
    color-1: @color;
}
.mixin2(@color: 7; @padding: 2px) { //参数数量不一致时，若传参位置变量有指定默认值会报错
    color-2: @color;
    padding-2: @padding;
}
.mixin2(@color; @padding; @margin: 5) {
    color-3: @color;
    padding-3: @padding;
    margin: @margin @margin @margin @margin;
}
.some .selector div {
    .mixin2(#008000);
}
```

混入传参不仅可以按混入声明时参数的位置进行传参，还可以使用{参数名: 值}的形式进行传参；使用{参数名: 值}的形式时，不用遵守混入声明时参数的位置

```less
.mixin(@color: black; @margin: 10px; @padding: 20px) {
  color: @color;
  margin: @margin;
  padding: @padding;
}
.class1 {
  .mixin(@margin: 20px; @color: #33acfe);
}
.class2 {
  .mixin(#efca44; @padding: 40px);
}
//编译结果：
.class1 {
  color: #33acfe;
  margin: 20px;
  padding: 20px;
}
.class2 {
  color: #efca44;
  margin: 10px;
  padding: 40px;
}
```

@arguments变量在混入里面有特殊意义，当调用混入时，@arguments包含了所有传递的参数；当你想要使用所有参数的值，而不是单独的一个，这个变量是很有用的

```less
.box-shadow(@x: 0; @y: 0; @blur: 1px; @color: #000) {
  -webkit-box-shadow: @arguments;
     -moz-box-shadow: @arguments;
          box-shadow: @arguments;
}
.big-block {
  .box-shadow(2px; 5px);
}
//编译结果：
.big-block {
  -webkit-box-shadow: 2px 5px 1px #000;
     -moz-box-shadow: 2px 5px 1px #000;
          box-shadow: 2px 5px 1px #000;
}
```

混入还允许使用@rest变量这种高级的参数形式。如果你想你的混入有一个可变数量的参数，你可以使用...，在一个变量名后面使用...，这个变量名会接收这个变量名之后的所有参数

```less
.mixin(...) {        // matches 0-N arguments
.mixin() {           // matches exactly 0 arguments
.mixin(@a: 1) {      // matches 0-1 arguments
.mixin(@a: 1; ...) { // matches 0-N arguments
.mixin(@a; ...) {    // matches 1-N arguments
.mixin(@a; @rest...) {
   // @rest is bound to arguments after @a
   // @arguments is bound to all arguments
}
```

有时你想根据传递的参数来改变一个混入的行为，可以使用模式匹配的方式做到

```less
//根据switch值的不同，让.mixin的行为不同
.mixin(dark; @color) {
  color: darken(@color, 10%);
}
.mixin(light; @color) {
  color: lighten(@color, 10%);
}
.mixin(@_; @color) {
  display: block;
}

@switch: light;
.class {
  .mixin(@switch; #888);
}
//编译结果：
.class {
  color: #a2a2a2;
  display: block;
}
```

上面示例，第一个.mixin与调用传参不匹配，因为它期望第一个参数是dark；第二个.mixin与调用传参匹配，因为他所期望的第一个参数就是light，第三个.mixin也与调用传参匹配，因为它的第一个参数代表可以传入任意值。只有匹配到的混入会被调用，参数是变量的可以匹配绑定到任意值，其他值都只能匹配和他自己相等的值。匹配模式还可以根据参数个数，例如：

```less
.mixin(@a) {
  color: @a;
}
.mixin(@a; @b) {
  color: fade(@a; @b);
}
.class{
    .mixin(#eee);
}
.class1{
    .mixin(#eee, #ddd)；
}
//编译结果：
.class{
    color: #eee;
}
.class1{
    color: fade(#eee; #ddd)
}
```



混入作为函数：

混入作为函数时，可以认为是一个返回变量和混入的函数。在一个混入里面定义的变量和混入是可见的，可以在调用者的作用域内使用。只有一个列外，如果调用者包含一个具有相同名的变量(包括其他混入调用定义的变量)时，则不会复制变量。只有在调用者本地作用域中存在的变量才受到保护，不会被重写， 从父作用域继承的变量将被重写。即优先级：调用者本地作用域 > 混入调用的作用域 > 父作用域

```less
//在一个混入里面定义的变量和混入是可见的，可以在调用者的作用域内使用
.mixin() {
  @width:  100%;
  @height: 200px;
}
.caller {
  .mixin();
  width:  @width;
  height: @height;
}
//编译结果：
//因此在混入里面定义的变量可以作为返回值来使用，这可以让我们创建一个几乎像函数的混入
.caller {
  width:  100%;
  height: 200px;
}

.average(@x, @y) {
  @average: ((@x + @y) / 2);
}

div {
  .average(16px, 50px); // "call" the mixin
  padding: @average;    // use its "return" value
}
//编译结果：
div {
  padding: 33px;
}

//在调用者作用域直接定义的变量不会被覆写，然而定义在调用者父作用域的变量是不受保护的，会被覆写
.mixin() {
  @size: in-mixin;
  @definedOnlyInMixin: in-mixin;
}
.class {
  margin: @size @definedOnlyInMixin;
  .mixin();
}
@size: globaly-defined-value; // callers parent scope - no protection
//编译结果：
.class {
  margin: in-mixin in-mixin;
}

//在混入里面定义的混入也会作为返回值来使用
.unlock(@value) { // outer mixin
  .doSomething() { // nested mixin
    declaration: @value;
  }
}
#namespace {
  .unlock(5); // unlock doSomething mixin
  .doSomething(); //nested mixin was copied here and is usable
}
//编译结果：
#namespace {
  declaration: 5;
}
```



给混入传入规则集(v1.7.0以后支持)：

一个分离的规则集，是存在一个变量里面的一组css属性、嵌套的规则集、媒体查询声明或者其他任何内容。你可以在一个规则集或其他结构中使用这个变量，它所包含的所有属性都会被复制在这。你也可以把它作为混入的参数使用，像其他别的变量一样传递它。分离规则集调用后面的括号是必须的，不使用括号，可能会不起作用。当你想定义一个可以抽象媒体查询声明代码的混入或一个可以抽象不支持浏览器类的声明代码的混入时，分离规则集是有用的。

```less
// declare detached ruleset
@detached-ruleset: { background: red; };
// use detached ruleset
.top {
    @detached-ruleset(); 
}
//编译结果：
.top {
  background: red;
}

//抽象媒体查询和浏览器不支持类的声明代码
.desktop-and-old-ie(@rules) {
  @media screen and (min-width: 1200) { @rules(); }
  html.lt-ie9 &                       { @rules(); }
}
header {
  background-color: blue;

  .desktop-and-old-ie({
    background-color: red;
  });
}
//编译结果：
header {
  background-color: blue;
}
@media screen and (min-width: 1200) {
  header {
    background-color: red;
  }
}
html.lt-ie9 header {
  background-color: red;
}

//规则集现在可以赋值给变量、可以传递给混入、可以包含完整的less功能集
@my-ruleset: {
    .my-selector {
      @media tv {
        background-color: black;
      }
    }
  };
@media (orientation:portrait) {
    @my-ruleset();
}
//编译结果：
@media (orientation: portrait) and tv {
  .my-selector {
    background-color: black;
  }
}

//调用一个分离的规则集，会像调用一个混入一样，返回所有的混入给调用者，但是调用分离的规则集不会返回变量
// detached ruleset with a mixin
@detached-ruleset: { 
    .mixin() {
        color:blue;
    }
};
// call detached ruleset
.caller {
    @detached-ruleset(); 
    .mixin();
}
//编译结果：
.caller {
  color: blue;
}
```

一个分离规则集可以访问它定义位置和调用位置作用域的所有变量和混入，如果这两个作用域都包含相同的变量或混入，则使用声明作用域的值。声明作用域是分离规则集内容定义的地方。从一个变量复制分离规则集到另一个变量，不会改变分离规则集的作用域，分离规则集只是在那里被引用，无法访问那个地方的作用域。如果规则集是被import的，则可以获取到导入地方的作用域。

```less
//一个分离规则集可以访问调用位置作用域的所有变量和混入
@detached-ruleset: {
  caller-variable: @caller-variable; // variable is undefined here
  .caller-mixin(); // mixin is undefined here
};
selector {
  // use detached ruleset
  @detached-ruleset(); 
  // define variable and mixin needed inside the detached ruleset
  @caller-variable: value;
  .caller-mixin() {
    variable: declaration;
  }
}
//编译结果：
selector {
  caller-variable: value;
  variable: declaration;
}


//定义位置作用域优先于调用位置
@variable: global;
@detached-ruleset: {
  // will use global variable, because it is accessible
  // from detached-ruleset definition
  variable: @variable; 
};
selector {
  @detached-ruleset();
  @variable: value; // variable defined in caller - will be ignored
}
//编译结果：
selector {
  variable: global;
}


//从一个变量复制分离规则集到另一个变量，不会改变分离规则集的作用域
@detached-1: { scope-detached: @one @two; };
.one {
  @one: visible;
  .two {
    @detached-2: @detached-1; // copying/renaming ruleset 
    @two: visible; // ruleset can not see this variable
  }
}
.use-place {
  .one > .two(); 
  @detached-2();
}
//编译结果：
//官方文档上写的是报错：ERROR 1:32 The variable "@one" was not declared.
//测试结果是：没有报错，可以访问变量@one


//分离的规则集可以通过在作用域内解锁（导入）来获得访问权限
#space {
  .importer-1() {
    @detached: { scope-detached: @variable; }; // define detached ruleset
  }
}
.importer-2() {
  @variable: value; // unlocked detached ruleset CAN see this variable
  #space > .importer-1(); // unlock/import detached ruleset
}
.use-place {
  .importer-2(); // unlock/import detached ruleset second time
   @detached();
}
//编译结果:
.use-place {
  scope-detached: value;
}
```

## 嵌套规则(Nested Rules)

嵌套规则让你的代码更简洁的，而且可以模仿html的结构。

基本用法：

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
//编译结果：
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```



父选择器：

&操作符代表代表嵌套规则里面的父选择器，经常在一个伪类或修饰类上使用它。&操作符有很多用途，你可以在嵌套规则里面使用它，将选择器以一些其他的方式而不是默认方式结合。

```less
//在伪类上使用
.clearfix {
  display: block;
  zoom: 1;
  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
//编译结果：
.clearfix {
  display: block;
  zoom: 1;
}
.clearfix:after {//如果没有&，结果就会变成.clearfix :after
   content: " ";
   display: block;
   font-size: 0;
   height: 0;
   clear: both;
   visibility: hidden;
}


//使用&生成一些相似的类
.button {
  &-ok {
    background-image: url("ok.png");
  }
  &-cancel {
    background-image: url("cancel.png");
  }
  &-custom {
    background-image: url("custom.png");
  }
}
//编译结果：
.button-ok {
  background-image: url("ok.png");
}
.button-cancel {
  background-image: url("cancel.png");
}
.button-custom {
  background-image: url("custom.png");
}
```

在一个选择器里面，可以多次使用&操作符。这可以让你以更简洁的方式重复引用一个父选择器，而无需每次重复书写父选择器的名字。

```less
.link {
  & + & {
    color: red;
  }
  & & {
    color: green;
  }
  && {
    color: blue;
  }
  &, &ish {
    color: cyan;
  }
}
//编译结果：
.link + .link {
  color: red;
}
.link .link {
  color: green;
}
.link.link {
  color: blue;
}
.link, .linkish {
  color: cyan;
}


//&代表全部的祖先选择器，不仅仅是最近的祖先选择器
.grand {
  .parent {
    & > & {
      color: red;
    }
    & & {
      color: green;
    }
    && {
      color: blue;
    }
    &, &ish {
      color: cyan;
    }
  }
}
//编译结果：
.grand .parent > .grand .parent {
  color: red;
}
.grand .parent .grand .parent {
  color: green;
}
.grand .parent.grand .parent {
  color: blue;
}
.grand .parent,
.grand .parentish {
  color: cyan;
}
```

将&放在当前选择器后面，可以在继承的祖辈选择器前追加当前选择器。例如，当时用Modernizr时，你可以根据浏览器所支持的特性来使用不同的规则：

```less
.header {
  .menu {
    border-radius: 5px;
    .no-borderradius & {
      background-image: url('images/button-background.png');
    }
  }
}
//编译结果：
.header .menu {
  border-radius: 5px;
}
.no-borderradius .header .menu {
  background-image: url('images/button-background.png');
}
```

当选择器是一个使用逗号分隔的列表时，&可以代表逗号分隔的任意一个选择器。

```less
//这样写会有16种组合方式
p, a, ul, li {
  border-top: 2px dotted #366;
  & + & {
    border-top: 0;
  }
}
//编译结果：
p,
a,
ul,
li {
  border-top: 2px dotted #366;
}
p + p,
p + a,
p + ul,
p + li,
a + p,
a + a,
a + ul,
a + li,
ul + p,
ul + a,
ul + ul,
ul + li,
li + p,
li + a,
li + ul,
li + li {
  border-top: 0;
}
```



指令的嵌套与冒泡：

指令像media或keyframe，可以和选择器以相同方式被嵌套。指令会被放到顶部，其他元素嵌套的相对位置不变，这个就是指令的冒泡。条件指令像@media, @supports, @document，在冒泡到顶部的同时，还会将选择器复制到它的body里面；而对于非条件指令像@font-face或@keyframes，也会冒泡到顶部，但是他们的body不变。

```less
//条件指令嵌套
.screen-color {
  @media screen {
    color: green;
    @media (min-width: 768px) {
      color: red;
    }
  }
  @media tv {
    color: black;
  }
}
//编译结果：
@media screen {
    .screen-color {
        color: green;
    }
}
@media screen and (min-width: 768px) {
    .screen-color {
        color: red;
    }
}
@media tv {
    .screen-color {
        color: black;
    }
}


//非条件指令嵌套
#a {
  color: blue;
  @font-face {
    src: made-up-url;
  }
  padding: 2 2 2 2;
}
//编译结果：
#a {
    color: blue;
    padding: 2 2 2 2;
}
@font-face {
    src: made-up-url;
}
```





## 操作符(Operations)

算术操作符(+,-,*,/)可以操作任何数字、颜色或变量。如果可能，算术运算会考虑单位，并且在进行加、减、比较操作时，会将操作数转换为数字。最终结果单位是最左边明确声明的单位。如果操作数的单位相互之间无法转换，或转换没有意义，那后面操作数的单位会被忽略，像px转cm或rad转%。在进行乘或除运算时，不会将操作数转换为数字，因为在大多数情况下，一个长度乘以一个长度会得到一个区域，而css不支持指定区域。 Less会忽略单位对数字进行操作，并将明确说明的单位类型分配给结果。

```less
// numbers are converted into the same units
@conversion-1: 5cm + 10mm; // result is 6cm
@conversion-2: 2 - 3cm - 5mm; // result is 1.5cm

// conversion is impossible
@incompatible-units: 2 + 5px - 3cm; // result is 4px

// example with variables
@base: 5%;
@filler: @base * 2; // result is 10%
@other: @base + @filler; // result is 15%

@base: 2cm * 3mm; // result is 6cm
```

颜色分为r,g,b,a，对颜色进行操作，会对这几个部分分别进行操作。例如：两个颜色相加，最终结果由各部分相加的和组成；用一个颜色乘以一个数字，每一部分都会乘以这个数字。但是需要注意的是，没有规定a部分的算术运算，因为对于颜色的算术运算没有真正意义上的标准，不要依赖当前的实现，因为在以后的版本中可能会发生变化。对于颜色的运算总是会返回一个合法的颜色，如果某部分的运算结果大于ff或小于00，这部分的最终结果会是ff或00，对于a部分，如果运算结果大于1或小于0，则最终结果会是1或0。

```less
@color: #224488 / 2; //results in #112244
background-color: #112244 + #111; // result is #223355
```





## 转义(Escaping)

转义允许你使用任何的字符串作为属性或变量值。在~"anything"或~'anything'里面的任何字符串除了插值都会按原样使用。

```less
.weird-element {
  //测试这个会报错，需要闭合/*这个多行注释
  content: ~"^//* some horrible but needed css hack";
}
//编译结果：
.weird-element {
  content: ^//* some horrible but needed css hack;
}

//转义里面包含插值
@conte: ~"^@//* */some horrible but needed css hack";
.weird-element {
    content: ~"^@{conte}//* */some horrible but needed css hack";
  }
//编译结果：
.weird-element {
  content: ^^@//* */some horrible but needed css hack//* */some horrible but needed css hack;
}
```





## 函数(Functions)

less提供了各种函数来对颜色进行转换、操作字符串和做数学运算。可以在函数手册里面看到所有函数的相关文档。

```less
@base: #f04615;
@width: 0.5;
.class {
  // uses percentage to convert 0.5 to 50%
  width: percentage(@width); // returns `50%`
  //increases the saturation of a base color by 5% 
  color: saturate(@base, 5%);
  //sets the background color to one that is lightened by 25% and spun by 8 degrees
  background-color: spin(lighten(@base, 25%), 8);
}
```





## 命名空间和访问器(Namespaces and Accessors)

这个命名空间不要和css的@namespace或者命名空间选择器混淆。有时，你可能希望将mixin分组，用于组织目的，或者仅提供一些封装。 你可以在Less中直观地做到这一点。

```less
//在#bundle下捆绑一些mixins和变量，以便以后重用或分发
//在命名空间声明的变量，无法通过#Namespace > @this-will-not-work这种方式使用
#bundle {
   @black: black;
  .button {
    display: block;
    border: 1px solid @black;
    background-color: grey;
    &:hover {
      background-color: white
    }
  }
}
#header a {
  color: orange;
  #bundle > .button;
}
//编译结果：
#bundle .button {
  display: block;
  border: 1px solid black;
  background-color: grey;
}
#bundle .button:hover {
  background-color: white;
}
#header a {
  color: orange;
  display: block;
  border: 1px solid black;
  background-color: grey;
}
#header a:hover {
  background-color: white；
}
```





## 作用域(scope)

less的作用域和其他编程语言是相似的。首先会在当前作用域查找变量和混入，如果没找到，就会去父作用域查找，以此类推。变量和混入不需在使用之前声明。

```less
@var: red;
#page {
  @var: white;
  #header {
    color: @var; // white
  }
}

//变量和混入不需在使用之前声明
@var: red;
#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```





## 注释

块注释和行内注释都可以使用

```less
/* One hell of a block
style comment! */
@var: red;

// Get in line!
@var: white;
```





## 导入(Importing)

导入预处理文件会合并到该文件，导入css文件会直接下载该文件。导入文件里面的所有变量在当前作用域都可以使用。导入文件的扩展名是可选的，尤其是less文件，默认扩展是less。

```less
@import "library"; // library.less
@import "typo.css";
```





## 扩展(extentd)

extend是一个less伪类，它会将使用它的选择器合并到它引用的选择器。在1.4.0版本可以使用它。

```less
nav ul {
  &:extend(.inline);
  background: blue;
}
```

在上面的规则集当中，:extend选择器会对任何地方的.inline选择器使用"扩展选择器"(nav ul)。声明地方会按原样输出，但是不会输出引用extend的部分，因为css不支持extend。

```less
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}
//编译结果：
//nav ul:extend(.inline)选择器输出为nav ul，extend在输出前会被移除，左边部分的选择器保持不变。如果声明地方的规则集，不包含其他属性，那输出时，这个规则集会删除，但里面声明的extend仍然有效。
nav ul {
  background: blue;
}
.inline,
nav ul {
  color: red;
}
```



extend语法：

extend要么放在一个选择器后面，要么放在一个规则集里面，他看起来像一个带有选择器参数，且选择器参数后面可以选择性的跟一个all的伪类选择器。

```less
.a:extend(.b) {}
// the above block does the same thing as the below block
.a {
  &:extend(.b);
}

.c:extend(.d all) {
  // extends all instances of ".d" e.g. ".x.d" or ".d.x"
}
.c:extend(.d) {
  // extends only instances where the selector will be output as just ".d"
}

//可以扩展多个类，多个类使用逗号分隔
.e:extend(.f) {}
.e:extend(.g) {}
// the above an the below do the same thing
.e:extend(.f, .g) {}
```



在选择器后面使用extend：

在选择器后面的extend更像一个伪类带一个选择器参数，一个选择器可以包含多个extend，但是extend必须放在选择器后面。

+ 在选择器后面的extend: pre:hover:extend(div pre)。
+ 选择器和extend之间可以使用空格: pre:hover :extend(div pre)。
+ 一个选择器可以包含多个extend: pre:hover:extend(div pre):extend(.bucket tr)，这种写法和pre:hover:extend(div pre, .bucket tr)这个相同。
+ 必须将extend放在选择器后面:pre:hover:extend(div pre).nth-child(odd)，这种写法是不允许的。

如果一个规则集包含多个选择器，那么每个选择器后面都可以使用extend。

```less
.big-division,
.big-bag:extend(.bag),
.big-bucket:extend(.bucket) {
  // body
}
```



在规则集里面使用extend：

可以通过使用&:extend(selector)将extend放在规则集里面，将extend放在规则集里可以简化将其放在一个规则集里的每一个单独选择器上。

````less
pre:hover,
.some-class {
  &:extend(div pre);
}
//下面的写法等同于上面
pre:hover:extend(div pre),
.some-class:extend(div pre) {}
````



在嵌套选择器上使用extend：

extend可以匹配嵌套的选择器。

```less
.bucket {
  tr { // nested ruleset with target selector
    color: blue;
  }
}
.some-class:extend(.bucket tr) {} // nested ruleset is recognized
//编译结果：
.bucket tr,
.some-class {
  color: blue;
}

//本质上，extend查找的是编译后的css，而不是原始的less
.bucket {
  tr & { // nested ruleset with target selector
    color: blue;
  }
}
.some-class:extend(tr .bucket) {} // nested ruleset is recognized
//编译结果：
tr .bucket,
.some-class {
  color: blue;
}
```



extend默认使用精确匹配：

extend默认在选择器之间使用精确匹配。对于这种精确匹配，选择器是否使用前导星号是有区别的。具有相同含义的两个nth表达式，他们需要具有相同的形式才能匹配。只有属性选择器里面使用哪种引号是例外的，less知道他们具有相同的含义，从而匹配他们。

```less
.a.class,
.class.a,
.class > .a {
  color: blue;
}
.test:extend(.class) {} // this will NOT match the any selectors above


//*.class和.class是相等的，但是extend不匹配他们
*.class {
  color: blue;
}
.noStar:extend(.class) {} // this will NOT match the *.class selector
//编译结果：
*.class {
  color: blue;
}


//伪类的顺序也很重要，如果顺序不一致，extend会认为他们是不同的
link:hover:visited {
  color: blue;
}
.selector:extend(link:visited:hover) {}
//编译结果：
link:hover:visited {
  color: blue;
}


//nth表达式的形式也很重要，nth表达式1n+3和n+3是相等的，但extend认为他们是不同的
:nth-child(1n+3) {
  color: blue;
}
.child:extend(:nth-child(n+3)) {}
//编译结果：
:nth-child(1n+3) {
  color: blue;
}


//属性选择器里面的引号类型是不重要的，以下的都是等价的
[title=identifier] {
  color: blue;
}
[title='identifier'] {
  color: blue;
}
[title="identifier"] {
  color: blue;
}
.noQuote:extend([title=identifier]) {}
.singleQuote:extend([title='identifier']) {}
.doubleQuote:extend([title="identifier"]) {}
//编译结果：
[title=identifier],
.noQuote,
.singleQuote,
.doubleQuote {
  color: blue;
}
[title='identifier'],
.noQuote,
.singleQuote,
.doubleQuote {
  color: blue;
}
[title="identifier"],
.noQuote,
.singleQuote,
.doubleQuote {
  color: blue;
}
```



在extend参数里面使用all关键字：

但你在extend参数的最后使用all关键字时，less会匹配包含该选择器的所有选择器。less会复制匹配到的选择器，然后使用继承的选择器去替换匹配到的部分，生成一个新的选择器。

```less
.a.b.test,
.test.c {
  color: orange;
}
.test {
  &:hover {
    color: green;
  }
}
.replacement:extend(.test all) {}
//编译结果：
.a.b.test,
.test.c,
.a.b.replacement,
.replacement.c {
  color: orange;
}
.test:hover,
.replacement:hover {
  color: green;
}
```



extend与选择器插值(测试结果与文档貌似不符)：

extend不能匹配使用变量的选择器。如果选择器包含变量，extend会忽略它。这个特征正在商议中(目前貌似已经支持)。然而extend可以放到选择器插值后面(貌似并不支持)。

```less
@variable: .bucket;
@{variable} { // interpolated selector
  color: blue;
}
.some-class:extend(.bucket) {} // does nothing, no match is found
//目前貌似支持，编译结果：
.bucket, .some-class{
    color: blue;
}


//extend参数使用变量
.bucket {
  color: blue;
}
.some-class:extend(@{variable}) {} // interpolated selector matches nothing
@variable: .bucket;
//目前貌似不支持，编译结果：
.bucket {
  color: blue;
}


//extend放在插值选择器后面
.bucket {
  color: blue;
}
@{variable}:extend(.bucket) {}
@variable: .selector;
//貌似并不支持，编译结果：
.bucket {
  color: blue;
}
```



媒体声明里面的extend：

媒体声明里面的extend只会匹配同一个媒体声明里面的选择器，对于同一媒体声明里面的嵌套声明的选择器也不会匹配。最高层级的extend会匹配所有的选择器，包括嵌套在媒体查询里面的。

```less
@media print {
  .screenClass:extend(.selector) {} // extend inside media
  .selector { // this will be matched - it is in the same media
    color: black;
  }
}
.selector { // ruleset on top of style sheet - extend ignores it
  color: red;
}
@media screen {
  .selector {  // ruleset inside another media - extend ignores it
    color: blue;
  }
}
//编译结果：
@media print {
  .selector,
  .screenClass { /*  ruleset inside the same media was extended */
    color: black;
  }
}
.selector { /* ruleset on top of style sheet was ignored */
  color: red;
}
@media screen {
  .selector { /* ruleset inside another media was ignored */
    color: blue;
  }
}


//不会匹配同一媒体声明中嵌套声明的选择器
@media screen {
  .screenClass:extend(.selector) {} // extend inside media
  @media (min-width: 1023px) {
    .selector {  // ruleset inside nested media - extend ignores it
      color: blue;
    }
  }
}
//编译结果：
@media screen and (min-width: 1023px) {
  .selector { /* ruleset inside another nested media was ignored */
    color: blue;
  }
}


//最高层级的extend会匹配所有的选择器，包括嵌套在媒体查询里面的
@media screen {
  .selector {  /* ruleset inside nested media - top level extend works */
    color: blue;
  }
  @media (min-width: 1023px) {
    .selector {  /* ruleset inside nested media - top level extend works */
      color: blue;
    }
  }
}
.topLevel:extend(.selector) {} /* top level extend matches everything */
//编译结果：
@media screen {
  .selector,
  .topLevel { /* ruleset inside media was extended */
    color: blue;
  }
}
@media screen and (min-width: 1023px) {
  .selector,
  .topLevel { /* ruleset inside nested media was extended */
    color: blue;
  }
}
```



匹配多个选择器：

目前不支持匹配多个选择器(测试结果支持与文档不符)。

```less
.alert-info,
.widget {
  /* declarations */
}
.alert:extend(.alert-info, .widget) {}
//编译结果：
.alert-info,
.widget,
.alert,
.alert {
  /* declarations */
}
```



extend的使用情形：

最典型的使用情形是避免加一个基础类。

```less
//例如
.animal {
  background-color: black;
  color: white;
}
//你想覆盖animal的背景色，有两种方式
//第一种改变html
<a class="animal bear">Bear</a>
.animal {
  background-color: black;
  color: white;
}
.bear {
  background-color: brown;
}
//保持相同的html，使用extend
<a class="bear">Bear</a>
.animal {
  background-color: black;
  color: white;
}
.bear {
  &:extend(.animal);
  background-color: brown;
}
```

也会使用extend来减少css文件的大小。混入会复制所有属性到选择器，这样会增加没必要的复杂性。因此可以使用extend来替换混入将选择器放到你想使用的选择器上，这样会减少生成的css。

```less
//使用mixin
.my-inline-block() {
    display: inline-block;
  font-size: 0;
}
.thing1 {
  .my-inline-block;
}
.thing2 {
  .my-inline-block;
}
//编译结果：
.thing1 {
  display: inline-block;
  font-size: 0;
}
.thing2 {
  display: inline-block;
  font-size: 0;
}


//使用extend
.my-inline-block {
  display: inline-block;
  font-size: 0;
}
.thing1 {
  &:extend(.my-inline-block);
}
.thing2 {
  &:extend(.my-inline-block);
}
//编译结果：
.my-inline-block,
.thing1,
.thing2 {
  display: inline-block;
  font-size: 0;
}
```

还有一种使用情形是混入的替代方案，因为混入只能应用于简单的选择器，如果你有两个不同的html块，但需要使用相同的样式，你可以使用extend来关联这两个区域。

```less
li.list > a {
  // list styles
}
button.list-style {
  &:extend(li.list > a); // use the same list styles
}
```





## 导入指令(Import Directives)

在标准css中，@import必须放在其他类型规则前面。但是在less中，@import可以放在任意位置。

```less
.foo {
  background: #900;
}
@import "this-is-valid.less";
```



文件扩展：

在less中，导入文件的扩展不同，@import可能会有不同的解析。

+ 如果文件扩展是css，会被当做css来处理，@import语句的处理方式见导入选项的inline选项
+ 如果文件扩展是css以外的其他任何扩展，都会被当做less来处理并且导入
+ 如果没有扩展，会为文件加上.less的扩展，然后按less文件来导入

```less
@import "foo";      // foo.less is imported
@import "foo.less"; // foo.less is imported
@import "foo.php";  // foo.php imported as a less file
@import "foo.css";  // statement left in place, as-is
```

下面介绍的导入选项可以覆盖上面的行为。



导入选项：

对于css @import css规则，less提供了几个扩展，让其比使用外部文件更灵活。

语法：@import (keyword) "filename";

以下这些指令已经实现：

+ reference：使用一个less文件但不输出
+ inline：在输出中包含源文件，但不处理它
+ less：不管文件扩展是什么，将其视为less文件
+ css：不管文件扩展是什么，将其视为css文件
+ once：只包含一次该文件(这是默认行为)
+ multiple：多次包含该文件
+ optional：在找不到文件时继续编译

每个@import可以使用多个上面的关键字，使用逗号分隔这些关键字。

例如：@import (optional, reference) "foo.less";

reference(v1.5.0发布)：使用@import (reference)导入外部文件时，导入的样式不会加到编译输出中，除非有被引用。可以这样认为，当使用reference时，被导入文件里面的每一个指令和选择器被标记为引用，导入过程正常进行，但当生成css时，被引用标记的选择器(仅仅包含标记为引用选择器的媒体查询指令也是)不会输出。引用的样式不会出现在生成的css中，除非引用的样式被用作mixin或extend。此外，被用作mixin或extend时，reference会生成不同的结果。被用作extend时，只有新的选择器会输出，并且会在@import语句的地方输出。被用作mixin时，引用样式的规则会被混入(被标记为非引用)，并且会正常的在引用位置输出。使用reference，可以在编译结果中只输出引用文件中被引用了的样式。

```less
//只会输出Bootstrap中.navbar相关的样式
@import (reference) bootstrap.css;
.navbar:extend(.navbar all){}
```

inline(v1.5.0发布)：使用@import (inline) 导入外部文件时，会包含外部文件，但是不会处理外部文件的内容。当css文件不被less兼容，可以使用这种方式导入；虽然less支持大多数已知的标准css，但是它不支持某些地方的注释，以及所有已知的css hacks，因此，你可以使用这种方式在输出中包含导入的文件，以便所有css在一个文件中。

less(v1.4.0发布)：使用@import (less)导入外部文件时，会忽略文件的扩展，将其视为less。

css(v1.4.0发布)：使用@import (css)导入外部文件时，会忽略文件的扩展，将其视为css。使用这种方式会下载外部文件，而不是合并外部文件内容。

once(v1.4.0发布)：@import语句的默认行为，它表示文件只会被导入一次，后面的@import语句会被忽略。

```less
@import (once) "foo.less";
@import (once) "foo.less"; // this statement will be ignored
```

multiple(v1.4.0发布)：使用@import (multiple)导入外部文件时，可以导入多个文件名相同的文件，和once的行为相反。

```less
// file: foo.less
.a {
  color: green;
}
// file: main.less
@import (multiple) "foo.less";
@import (multiple) "foo.less";
//编译结果：
.a {
  color: green;
}
.a {
  color: green;
}
```

optional(v2.3.0发布)：使用@import (optional)导入外部文件时，只有当外部文件存在时，才会被导入。如果导入的外部文件不存在，且没有使用optional关键字，那么less会抛一个文件错误，并且停止编译。





## 混入守卫(Mixin Guards)

当你想匹配表达式而不是简单的值或数字时，守卫是有用的。如果你熟悉函数编程，有可能已经见过它们。在尝试尽可能接近CSS的声明性质时，Less选择通过混入守卫而不是if / else语句实现条件执行，这是@media查询功能规范的一部分。混入守卫的关键字是when，由它引入一个守卫语句。

```less
.mixin (@a) when (lightness(@a) >= 50%) {
  background-color: black;
}
.mixin (@a) when (lightness(@a) < 50%) {
  background-color: white;
}
.mixin (@a) {
  color: @a;
}
.class1 { .mixin(#ddd) }
.class2 { .mixin(#555) }
//编译结果：
.class1 {
  background-color: black;
  color: #ddd;
}
.class2 {
  background-color: white;
  color: #555;
}
```



守卫比较操作符：

守卫可以使用的比较操作符有：>, >=, <, <=, =。此外，关键字true是仅仅的真值，除了关键字true以外的任何其他值都是假值。

```less
//下面两个混入是等价的
.truth (@a) when (@a) { ... }
.truth (@a) when (@a = true) { ... }
//关键字true以外的任何其他值都是假值
.class {
  .truth(40); // Will not match any of the above definitions.
}

//可以使用比较操作符比较参数，也可以不使用参数
@media: mobile;
.mixin (@a) when (@media = mobile) { ... }
.mixin (@a) when (@media = desktop) { ... }
.max (@a; @b) when (@a > @b) { width: @a }
.max (@a; @b) when (@a < @b) { width: @b }
```



守卫逻辑操作符：

在守卫里面可以使用逻辑操作符，语法依据css媒体查询。

```less
//逻辑与使用and关键字
.mixin (@a) when (isnumber(@a)) and (@a > 0) { ... }
//逻辑或可以使用逗号来模拟
.mixin (@a) when (@a > 10), (@a < -10) { ... }
//逻辑非使用not关键字
.mixin (@b) when not (@b > 0) { ... }
```



类型检测函数：

如果你想根据值类型来匹配混入，你可以使用is函数。基本的类型检测函数有：

+ iscolor
+ isnumber
+ isstring
+ iskeyword
+ isurl

如果你想检测某个值具有某个具体单位而不只是数字，你可以使用下面的方法：

+ ispixel
+ ispercentage
+ isem
+ isunit



条件混入：

此外，default函数可用于根据其他混入匹配进行混入匹配，可以使用它来创建类似于else或default语句的“条件混合”（分别为if和case结构）：

```less
.mixin (@a) when (@a > 0) { ...  }
.mixin (@a) when (default()) { ... } // matches only if first mixin does not, i.e. when @a <= 0
```





## CSS守卫(CSS Guards)

v1.5.0发布。守卫也可以用于css选择器，可以看作是声明混入后立即调用它的语法糖。

```less
//v1.5.0之前需要像下面这样实现
.my-optional-style() when (@my-option = true) {
  button {
    color: white;
  }
}
.my-optional-style();
//现在可以直接对样式使用守卫
button when (@my-option = true) {
  color: white;
}
//可以使用&来对多个守卫进行分组
& when (@my-option = true) {
  button {
    color: white;
  }
  a {
    color: blue;
  }
}
```





## 循环(Loops)

在less里面，混入可以调用自己。当与守卫表达式和模式匹配结合使用时，这种混入递归可用于创建各种迭代或循环结构。

```less
.loop(@counter) when (@counter > 0) {
  .loop((@counter - 1));    // next iteration
  width: (10px * @counter); // code for each iteration
}
div {
  .loop(5); // launch the loop
}
//编译结果：
div {
  width: 10px;
  width: 20px;
  width: 30px;
  width: 40px;
  width: 50px;
}

//使用递归循环生成CSS网格类的一般示例
.generate-columns(4);
.generate-columns(@n, @i: 1) when (@i =< @n) {
  .column-@{i} {
    width: (@i * 100% / @n);
  }
  .generate-columns(@n, (@i + 1));
}
//编译结果：
.column-1 {
  width: 25%;
}
.column-2 {
  width: 50%;
}
.column-3 {
  width: 75%;
}
.column-4 {
  width: 100%;
}
```





## 合并(Merge)

合并特征允许将多个属性的值合并到一个以逗号或空格分隔的列表中，并将其作为一个属性的值。合并对于像background、transform是有用的。为了避免无意的连接，合并需要明确的在每个要合并的属性上使用+或+_标志。

```less
//用逗号合并属性值
.mixin() {
  box-shadow+: inset 0 0 10px #555;
}
.myclass {
  .mixin();
  box-shadow+: 0 0 20px black;
}
//编译结果：
.myclass {
  box-shadow: inset 0 0 10px #555, 0 0 20px black;
}


//用空格合并属性值
.mixin() {
  transform+_: scale(2);
}
.myclass {
  .mixin();
  transform+_: rotate(15deg);
}
//编译结果：
.myclass {
  transform: scale(2) rotate(15deg);
}
```

