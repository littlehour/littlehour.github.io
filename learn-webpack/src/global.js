/**
 * @license
 * global.js
 */
var g1="g1";
var g2=function(){
    console.log('g2');
};
var g3={
    g31:function(){
        console.log('g31');
    },
    g32:function(){
        console.log('g32');
    }
};
// exports.g1=g1;
exports.g32=g3.g32;