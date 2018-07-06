import _ from 'lodash';
import printMe from './output';
import './style.css';
function component(){
    var ele=document.createElement('div');
    var btn=document.createElement('button');
    // lodash 是由当前 script 脚本 import 导入进来的
    ele.innerHTML=_.join(['hello','webpack'],' ');
    btn.innerHTML="click me and check the console";
    btn.onclick=printMe;
    ele.appendChild(btn);
    return ele;
}
var elem=component();
document.body.appendChild(elem);
if(module.hot){
    module.hot.accept('./output',function(){
        console.log('output hot replacement');
        // btn.onclick=printMe;
        document.body.removeChild(elem);
        elem=component();
        document.body.appendChild(elem);
    })
}