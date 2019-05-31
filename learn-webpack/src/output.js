import math from './math';
// import _ from 'lodash';
export function printMe(){
    // import(/*webpackChunkName:'vendor'*/'lodash').then(function(){
    //     console.log('loadash');
    // })
    console.log('i am called ee by output!');
    console.log(math(3));
};
printMe();
console.log('this module has been loaded!');