let any1:any=4;
// any1.say();
let object1:Object={
    te:function(){
        console.log('te');
    },
    he:'he'
};
console.log(object1);
// console.log(object1.he);
// object1.te();  //object不允许访问任意方法和属性
let list:any[]=[true,5,'hello'];


let a:string=undefined;

let b:null=any1;

let d:void=null;

let c:undefined=null;

enum color{green=2,red,blue};
let green:string=color[2];
let red:color=color.red;
console.log(green);
console.log(red);

//类型断言
let e:number=<number>any1+2;
let f:number=(any1 as number)+2;

// 只读属性
let g: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = g;
g[0]=6;
// ro[0]=7;
console.log(ro[0]);
g=ro as number[];
let h:ReadonlyArray<number>=ro;

interface Point{
    readonly x:number;
    readonly y:number;
}
let p1:Point={x:10,y:20};
// p1.x=9;

// 使用接口定义可索引的类型
class Animal1 {
    name: string="animal1";
}
class Dog extends Animal1 {
    breed: string="breed";
    // [x:string]:string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    readonly [x: number]: Dog;
    // [x: number]: Animal1;
    [x: string]: Animal1;
}

let a1=new Dog();
let a2=new Dog();
let notokay:NotOkay={
    a1:a1,
    1:a2,
    '2':a1
};

// console.log(notokay[1]=new Dog());
console.log(notokay.a1=new Dog());
console.log(notokay[2]);

// 可选属性
interface value{
    value1?:string;
}

interface SquareConfig{
    color?:string;
    width?:number;
}

function createSquare(config:SquareConfig):{color:string;area:number}{
    let newSquare={color:"white",area:100};
    if(config.color){
        newSquare.color=config.color;
    }
    newSquare.area=config.width*config.width;
    console.log(config.width);
    return newSquare;
}

let mySquare=createSquare({color:'black'});
console.log(mySquare.area);

// 额外的属性检查
interface LabelledValue{
    label:string;
    [propname:string]:string;//解决额外的属性检查，可以让该接口类型带有任意数量的其他属性
}
function printLabel(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}
// printLabel({label:"label",size:'10',test:'test'} as LabelledValue);//使用类型断言绕开检查
// printLabel({label:"label",size:'10',test:'test'});
let labelledObj1={label:"label",size:'10'};
printLabel(labelledObj1);

// 函数类型
interface SearchFunc{
    (source:string,substring:string):boolean;
}
let search:SearchFunc=function(src,sub){
    return src.search(sub)>-1;
    // src.push('a');
}

// 使用类类型实现接口
interface ClockInterface{
    currentTime:Date;
}

class clock implements ClockInterface{
    currentTime:Date=new Date();
    private hid:string="his";
}

// interface ClockConstructor{
//     new (hour:number,minute:number):Clock;
// }

// class Clock implements ClockConstructor{
//     currentTime:Date;
//     constructor(h:number,m:number){}
// }

// class Clock{
//     // time:string;
//     constructor(h:number,m:number){
//         // this.time=h+':'+m;
//     }
// }

// interface ClockConstructor{
//     new (hour:number,minute:number);
// }
// let clock1:ClockConstructor=Clock;


interface ClockConstructor{
    new (hour:number,minute:number):ClockInterface1;
}

interface ClockInterface1{
    tick();
}

function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface1{
    return new ctor(hour,minute);
}

class DigitalClock{
    constructor(h:number,m:number){}
    tick(){
        console.log('beep');
    }
}
let digital=createClock(DigitalClock,12,12);


// 接口继承
interface inter1{
    a:string;
}

interface inter2 extends inter1,inter3{
    b:string;
}

interface inter3 {
    c:string;
}
let inter=<inter2>{};
inter.a="a";
inter.b="b";
inter.c='c';

// 混合类型
interface c{
    (c1:string):string;
    c2:string;
    c3():string;
}

let cc:c;
cc=<c>function(c1:string){
    return "cc";
}
cc.c2="cc";
cc.c3=function(){
    return "cc";
}

// 接口继承类
class cla{
    protected cla1:string;
}

interface inte extends cla{
    inte1();
}

class cla2 extends cla implements inte{
    inte1(){};
    // cla1:string="cla";
}

class cla3 extends cla{
    inte1(){};
}

let cla4:inte=new cla3();

// 类
class class1{
    clas1:string;
    constructor(message:string){
        this.clas1=message;
    };
    showClas(){
        console.log(this.clas1);
    };
}

// let class1Instance=new class1('it is class1 instance!');
// class1Instance.showClas();

// 继承
class class2 extends class1{
    clas2:string='sub class class2';
    // constructor(m1:string,m2:string){
    //     super(m1);
    //     this.clas2=m2;
    // };
    // constructor(m1:string){
    //     super();
    //     this.clas2=m1;
    // };
    showClas(){
        super.showClas();
        console.log(this.clas2);
    }
}
// let class2Instance=new class2('super class class1','sub class class2');
let class2Instance=new class2('super class class1');
class2Instance.showClas();

let class2Instance1:class1=new class2('class1');
class2Instance1.showClas();

let class1Instance1:class1=new class2('class1');

// 成员修饰符public、private、protected
class class3 {
    private clas3:string='class3';
}

class class4{
    private clas3:string='calss4';
}
let class3Instance=new class3();
// console.log(class3Instance.clas3);
let class4Instance=new class4();
// class4Instance=class3Instance

class class5{
    // protected clas5:string='class5';
    test:string='test class5';
    // protected constructor(protected clas5:string){
    constructor(protected clas5:string){
        // this.clas5=clas5;
    }
    newClass5(){
        let class5Instance=new class5('clas5');
    }
}

// let class5Instance=new class5('clas5');

class class6 extends class5{
    test:string='test class6';
    constructor(clas){
        super(clas);
    }
    showClas(){
        console.log(this.clas5);
    }
}

let aa:class5=new class6('aa');
console.log('test:'+aa.test);

// let aaa:class6=new class5('aaa');

let passwd='paswd';
class class7 {
    private _clas7:string;
    get clas7():string{
        return this._clas7;
    }

    set clas7(newValue:string){
        if(passwd&&passwd==='passwd'){
            this._clas7=newValue;
        }else{
            alert('passwd is wrong');
        }
    }
}

let class7Instance=new class7();
class7Instance.clas7='newvalue';
if(class7Instance.clas7){
    alert('clas7:'+class7Instance.clas7);
}

class class8{
    static clas8:string='clas8';
}
let class8Instance=new class8();
// class8Instance.clas8
console.log(class8.clas8);

abstract class class9{
    abstract clas9:string='clas9';
    abstract clas9Func():void;
}
class class10 extends class9{
    clas9:string='clas10';
    clas9Func():void{
        console.log('class9Func');
    };
    clas10Func():void{
        console.log('class10Func');
    }
}

// let class10Instance:class9;
let class10Instance=new class10();
class10Instance=new class10();
class10Instance.clas10Func();//如果引用了抽象类class9，则该方法不可访问，因为在抽象类上未声明
console.log(class10Instance.clas9);

// 为函数添加类型
function func1(s1:string,s2:string):string{
    return s1+s2;
}
func1('s1','s2');

// 书写完整函数类型
let func2:(s1:string,s2:string)=>string=function (s11:string,s22:string){
    return s11+s22;
}

// 推断类型
let func3=function (s1:string,s2:string):string{
    return s1+s2;
}

let func4:(s1:string,s2:string)=>string=function(s111,s222){
    return s111+s222;
}

// 可选参数和默认参数
function func5(s1:string,s2:string):string{
    return s1+s2;
}
func5('s1','s2');
// func5('s1');
// func5('s1','s2','s3');

function func6(s1:string,s2?:string):string{
    if(s2){
        return s1+s2;
    }else{
        return s1;
    }
}
func6('s1');
func6('s1','s2');
// func6('s1','s2','s3');

// function func7(s1:string,s2='s2'):string{
function func7(s1='s1',s2:string):string{
    return s1+s2;
}
// func7('s1');
func7('s1','s22');
let testFunc7=func7(undefined,'s2');
console.log(testFunc7);
// func7('s1','s2','s3');

// 剩余参数
function func8(s1:string,s2:string,...s3:any[]):string{
    return s1+','+s2+','+s3.join(',');
}
func8('s1','s2','s3',4,true,{a:1});
let func88:(s1:string,s2:string,...s3:string[])=>string=func8;

// this和箭头函数
let this1={
    a1:'a1',
    a2:function(){
        return function(){
            alert(this.a1);
        }
    }
}
let this2={
    a1:'a1',
    a2:function(this:void){
        return ()=>alert('a2');
    }
}

class class11{
    clas11:string='clas11';
    showClas11(this:class11){
        return ()=>alert(this.clas11);
    }
    aa:(this:class11)=>()=>void=function(this:class11){
        return function(){
            alert(this.clas11);
        }
    }
}
let class11Instance=new class11();
class11Instance.showClas11()();

// interface UIElement {
//     addClickListener(onclick: (this: Handler, e: Event) => void): void;
// }

// class Handler {
//     info: string;
//     // onClickBad(this: Handler, e: Event) {
//     //     // oops, used this here. using this callback would crash at runtime
//     //     this.info = 'message';
//     // }

//     onClickBad=(e:Event)=>this.info='message';
// }
// let handler = new Handler();
// let uiElement:UIElement;
// uiElement.addClickListener(handler.onClickBad); // error!

// 重载
function func9 (s1:string):void;
function func9(n1:number):number;
function func9(sn):any{
    if(typeof sn=='string'){
        console.log(sn);
    }else{
        return sn;
    }
}

func9('s1');
console.log(func9(2));