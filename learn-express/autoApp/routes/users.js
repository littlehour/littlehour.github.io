var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('users');
  // console.log(req.app);
  res.send('respond with a resource change');
});

router.post('/',function(req,res,next){
  console.log(req.body);
})

module.exports = router;
