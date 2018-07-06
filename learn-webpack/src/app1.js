import {cube} from './math.js';
function component(){
    var ele=document.createElement('pre');
    ele.innerHTML=[
        'hello webpack!',
        '5 cubed is equal to '+cube(5)+' '+square(5)
    ].join('\n\n');
    return ele;
};
document.body.appendChild(component());