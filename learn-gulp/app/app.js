var http=require('http');
var fs=require('fs');
// var url=require('url');
var documentRoot='E:\\网关\\app';
var server=http.createServer(function(req,res){
    var path=req.url;
    console.log(path);
    var file=documentRoot+'/index.html';
    if(path==='/'){
        readFileAndResponse(file,res,'text/html;charset="utf-8"','<h1>404错误</h1><p>你要找的页面不存在</p>');
    }else{
        file=documentRoot+path;
        if(path.indexOf('css')!==-1){
            readFileAndResponse(file,res,'text/css;charset="utf-8"');
        }else if(path.indexOf('js')!==-1){
            readFileAndResponse(file,res,'text/javascript;charset="utf-8"');
        }else{
            readFileAndResponse(file,res,'image/webp');
        };
    };

}).listen(8000);

function readFileAndResponse(file,response,contentType,errShow){
    //判断文件是否存在
    fs.readFile(file,function(err,data){
        //文件不存在或读取错误返回404
        if(err){
            response.writeHead(404,{'content-type':contentType});
            if(errShow){
                res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            }
            response.end();
        }
        else{
            //读取成功返回相应页面信息
            response.writeHeader(200,{'content-type':contentType});
            response.write(data);
            response.end();
        }
    });
}