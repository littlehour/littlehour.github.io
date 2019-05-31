import './style.css';
import './test.css';
import _ from 'lodash';
import icon from './gatewayHome.png';
import icon1 from './ibeacon.png';
import './index.html';
import data from './test.json';
import po from './piece.html';
console.log(po);
console.log(JSON.stringify(data));//引入的json数据已经解析为对象
function component(){
    var ele=document.createElement('div');
    // lodash 是由当前 script 脚本 import 导入进来的
    ele.innerHTML=_.join(['hello','webpack'],' ');
    ele.classList.add('hello');
    return ele;
}
document.body.appendChild(component());