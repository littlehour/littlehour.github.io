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