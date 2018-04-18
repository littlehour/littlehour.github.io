var express=require('express');
var router=express.Router();
router.get('/test',function(req,res,next){
    // res.render('testLocal.html');
    // res.send('test');
    var options={
        root:__dirname+'/../views'
    }
    // res.sendFile('testLocal.html',options);
    console.log('test');
    console.log(req.fresh);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.ips);
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    res.render('testLocal.html');
});

router.post('/',function(req,res,next){
    console.log('test local post request');
    console.log(req.body);
    console.log(req.cookies);
    // res.send('test local post success');
    res.json(req.body);
})
module.exports=router;