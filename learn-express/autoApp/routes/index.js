var express = require('express');
var router = express.Router();
// var app=express();

/* GET home page. */
// app.get('/',function(req,res,next){
//   console.log('app handle');
// });
router.use(function(req,res,next){
  console.log('log...');
  next();
});
router.get('/',function(req,res,next){
  next('route');
},function(req, res, next) {
  // next('/users');
  res.sendStatus('200');
  // res.send('hlle');
  // res.render('index', { title: 'Express' });
});

router.get('/',function(req,res,next){
  res.render('index',{title:'Express'});
});

router.get('/users',function(req,res,next){
  console.log('index');
  next();
});

module.exports = router;
