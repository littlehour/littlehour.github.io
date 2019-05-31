import _ from 'lodash';
import buffer from 'buffer';
import math from './math';
// import {printMe} from './output.js';
import {print} from './print.js';
import './test.css';
function component(){
    var ele=document.createElement('div');
    // lodash 是由当前 script 脚本 import 导入进来的
    // ele.innerHTML=_.join(['hello','webpack'],' ');
    // return ele;
    // return import(/*webpackChunkName:'vendor'*/'lodash').then(function(_){
        var br=document.createElement('br');
        var btn=document.createElement('button');
        btn.innerHTML="click the button and check the console";
        btn.onclick=function(){
            // import(/* webpackMode: "eager" */'./output').then(function(module){
            //     console.log(module);
            //     module.printMe();
            // })
            // printMe();
        };
        ele.innerHTML=_.join(['hello','webpackk'],' ');
        ele.classList.add('hello');
        ele.appendChild(br);
        ele.appendChild(btn);
        console.log(math(3));
        print();
        // printMe();
        // print();
        // import(/*webpackChunkName:'vendor'*/'buffer').then(function(path){
        //     console.log('buffer');
        // });
        return ele;
    // }).catch(function(){
    //     console.log('an error occurred while loading this component');
    // });
};
document.body.appendChild(component());
// component().then(function(ele){
//     document.body.appendChild(ele);
// });