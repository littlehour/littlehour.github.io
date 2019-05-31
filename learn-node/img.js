const fs = require('fs');
const moduleFile = './store7.png';

// fs.readFile('./store7.png','binary',function(err,filedata)  { //异步执行  'binary' 二进制流的文件
// if  (err)  {
//     console.log(err);
//     return;
// }else{
// // res.write(filedata,'binary');
// console.log(filedata)
// // res.end();
// }
// })


var    http    =    require('http');
http.createServer(function    (request,    res)    {    
    fs.readFile('./store7.png','binary',function(err,filedata)  { //异步执行  'binary' 二进制流的文件
    if  (err)  {
        console.log(err);
        return;
    }else{
    res.write(filedata,'binary');
    console.log(filedata)
    res.end();
    }
    }) 
}).listen(8000);