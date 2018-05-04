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
    protected constructor(protected clas5:string){
        // this.clas5=clas5;
    }
    newClass5(){
        let class5Instance=new class5('clas5');
    }
}

// let class5Instance=new class5('clas5');

class class6 extends class5{
    constructor(clas){
        super(clas);
    }
    showClas(){
        console.log(this.clas5);
    }
}

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
