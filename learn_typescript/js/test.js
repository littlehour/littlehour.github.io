var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var any1 = 4;
// any1.say();
var object1 = {
    te: function () {
        console.log('te');
    },
    he: 'he'
};
console.log(object1);
// console.log(object1.he);
// object1.te();  //object不允许访问任意方法和属性
var list = [true, 5, 'hello'];
var a = undefined;
var b = any1;
var d = null;
var c = null;
var color;
(function (color) {
    color[color["green"] = 2] = "green";
    color[color["red"] = 3] = "red";
    color[color["blue"] = 4] = "blue";
})(color || (color = {}));
;
var green = color[2];
var red = color.red;
console.log(green);
console.log(red);
//类型断言
var e = any1 + 2;
var f = any1 + 2;
// 只读属性
var g = [1, 2, 3, 4];
var ro = g;
g[0] = 6;
// ro[0]=7;
console.log(ro[0]);
g = ro;
var h = ro;
var p1 = { x: 10, y: 20 };
// p1.x=9;
// 使用接口定义可索引的类型
var Animal1 = /** @class */ (function () {
    function Animal1() {
        this.name = "animal1";
    }
    return Animal1;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.breed = "breed";
        return _this;
        // [x:string]:string;
    }
    return Dog;
}(Animal1));
var a1 = new Dog();
var a2 = new Dog();
var notokay = {
    a1: a1,
    1: a2,
    '2': a1
};
// console.log(notokay[1]=new Dog());
console.log(notokay.a1 = new Dog());
console.log(notokay[2]);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    newSquare.area = config.width * config.width;
    console.log(config.width);
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare.area);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
// printLabel({label:"label",size:'10',test:'test'} as LabelledValue);//使用类型断言绕开检查
// printLabel({label:"label",size:'10',test:'test'});
var labelledObj1 = { label: "label", size: '10' };
printLabel(labelledObj1);
var search = function (src, sub) {
    return src.search(sub) > -1;
    // src.push('a');
};
var clock = /** @class */ (function () {
    function clock() {
        this.currentTime = new Date();
        this.hid = "his";
    }
    return clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('beep');
    };
    return DigitalClock;
}());
var digital = createClock(DigitalClock, 12, 12);
var inter = {};
inter.a = "a";
inter.b = "b";
inter.c = 'c';
var cc;
cc = function (c1) {
    return "cc";
};
cc.c2 = "cc";
cc.c3 = function () {
    return "cc";
};
// 接口继承类
var cla = /** @class */ (function () {
    function cla() {
    }
    return cla;
}());
var cla2 = /** @class */ (function (_super) {
    __extends(cla2, _super);
    function cla2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cla2.prototype.inte1 = function () { };
    ;
    return cla2;
}(cla));
var cla3 = /** @class */ (function (_super) {
    __extends(cla3, _super);
    function cla3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cla3.prototype.inte1 = function () { };
    ;
    return cla3;
}(cla));
var cla4 = new cla3();
// 类
var class1 = /** @class */ (function () {
    function class1(message) {
        this.clas1 = message;
    }
    ;
    class1.prototype.showClas = function () {
        console.log(this.clas1);
    };
    ;
    return class1;
}());
// let class1Instance=new class1('it is class1 instance!');
// class1Instance.showClas();
// 继承
var class2 = /** @class */ (function (_super) {
    __extends(class2, _super);
    function class2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clas2 = 'sub class class2';
        return _this;
    }
    // constructor(m1:string,m2:string){
    //     super(m1);
    //     this.clas2=m2;
    // };
    // constructor(m1:string){
    //     super();
    //     this.clas2=m1;
    // };
    class2.prototype.showClas = function () {
        _super.prototype.showClas.call(this);
        console.log(this.clas2);
    };
    return class2;
}(class1));
// let class2Instance=new class2('super class class1','sub class class2');
var class2Instance = new class2('super class class1');
class2Instance.showClas();
var class2Instance1 = new class2('class1');
class2Instance1.showClas();
var class1Instance1 = new class2('class1');
// 成员修饰符public、private、protected
var class3 = /** @class */ (function () {
    function class3() {
        this.clas3 = 'class3';
    }
    return class3;
}());
var class4 = /** @class */ (function () {
    function class4() {
        this.clas3 = 'calss4';
    }
    return class4;
}());
var class3Instance = new class3();
// console.log(class3Instance.clas3);
var class4Instance = new class4();
// class4Instance=class3Instance
var class5 = /** @class */ (function () {
    // protected constructor(protected clas5:string){
    function class5(clas5) {
        this.clas5 = clas5;
        // protected clas5:string='class5';
        this.test = 'test class5';
        // this.clas5=clas5;
    }
    class5.prototype.newClass5 = function () {
        var class5Instance = new class5('clas5');
    };
    return class5;
}());
// let class5Instance=new class5('clas5');
var class6 = /** @class */ (function (_super) {
    __extends(class6, _super);
    function class6(clas) {
        var _this = _super.call(this, clas) || this;
        _this.test = 'test class6';
        return _this;
    }
    class6.prototype.showClas = function () {
        console.log(this.clas5);
    };
    return class6;
}(class5));
var aa = new class6('aa');
console.log('test:' + aa.test);
// let aaa:class6=new class5('aaa');
var passwd = 'paswd';
var class7 = /** @class */ (function () {
    function class7() {
    }
    Object.defineProperty(class7.prototype, "clas7", {
        get: function () {
            return this._clas7;
        },
        set: function (newValue) {
            if (passwd && passwd === 'passwd') {
                this._clas7 = newValue;
            }
            else {
                alert('passwd is wrong');
            }
        },
        enumerable: true,
        configurable: true
    });
    return class7;
}());
var class7Instance = new class7();
class7Instance.clas7 = 'newvalue';
if (class7Instance.clas7) {
    alert('clas7:' + class7Instance.clas7);
}
var class8 = /** @class */ (function () {
    function class8() {
    }
    class8.clas8 = 'clas8';
    return class8;
}());
var class8Instance = new class8();
// class8Instance.clas8
console.log(class8.clas8);
var class9 = /** @class */ (function () {
    function class9() {
        this.clas9 = 'clas9';
    }
    return class9;
}());
var class10 = /** @class */ (function (_super) {
    __extends(class10, _super);
    function class10() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clas9 = 'clas10';
        return _this;
    }
    class10.prototype.clas9Func = function () {
        console.log('class9Func');
    };
    ;
    class10.prototype.clas10Func = function () {
        console.log('class10Func');
    };
    return class10;
}(class9));
// let class10Instance:class9;
var class10Instance = new class10();
class10Instance = new class10();
class10Instance.clas10Func(); //如果引用了抽象类class9，则该方法不可访问，因为在抽象类上未声明
console.log(class10Instance.clas9);
// 为函数添加类型
function func1(s1, s2) {
    return s1 + s2;
}
func1('s1', 's2');
// 书写完整函数类型
var func2 = function (s11, s22) {
    return s11 + s22;
};
// 推断类型
var func3 = function (s1, s2) {
    return s1 + s2;
};
var func4 = function (s111, s222) {
    return s111 + s222;
};
// 可选参数和默认参数
function func5(s1, s2) {
    return s1 + s2;
}
func5('s1', 's2');
// func5('s1');
// func5('s1','s2','s3');
function func6(s1, s2) {
    if (s2) {
        return s1 + s2;
    }
    else {
        return s1;
    }
}
func6('s1');
func6('s1', 's2');
// func6('s1','s2','s3');
// function func7(s1:string,s2='s2'):string{
function func7(s1, s2) {
    if (s1 === void 0) { s1 = 's1'; }
    return s1 + s2;
}
// func7('s1');
func7('s1', 's22');
var testFunc7 = func7(undefined, 's2');
console.log(testFunc7);
// func7('s1','s2','s3');
// 剩余参数
function func8(s1, s2) {
    var s3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        s3[_i - 2] = arguments[_i];
    }
    return s1 + ',' + s2 + ',' + s3.join(',');
}
func8('s1', 's2', 's3', 4, true, { a: 1 });
var func88 = func8;
// this和箭头函数
var this1 = {
    a1: 'a1',
    a2: function () {
        return function () {
            alert(this.a1);
        };
    }
};
var this2 = {
    a1: 'a1',
    a2: function () {
        return function () { return alert('a2'); };
    }
};
var class11 = /** @class */ (function () {
    function class11() {
        this.clas11 = 'clas11';
        this.aa = function () {
            return function () {
                alert(this.clas11);
            };
        };
    }
    class11.prototype.showClas11 = function () {
        var _this = this;
        return function () { return alert(_this.clas11); };
    };
    return class11;
}());
var class11Instance = new class11();
class11Instance.showClas11()();
function func9(sn) {
    if (typeof sn == 'string') {
        console.log(sn);
    }
    else {
        return sn;
    }
}
func9('s1');
console.log(func9(2));
