var express = require('express');
var router = express.Router();

const { check,  validationResult  } =require('express-validator/check');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/casa',(req,res,next)=>{
  res.send('OK');
})

router.get('/apiv1/anuncios',(req,res,next)=>{
  console.log('Parametros en la petición:',req.query)
  res.send('OK');
});

router.post('/casa',(req,res,next)=>{  //recibimos el body de la peticion 'POST'
  console.log('recibimos body con', req.body);
  res.send('OK');
});

//validaciones
router.get('/querystring',[
  check('age').isNumeric().withMessage('must be numeric')
],(req,res,next)=>{ 
  validationResult(req).throw();
  console.log('req.query', req.query);
  res.send('OK');
});

module.exports = router;
