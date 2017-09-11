var express = require('express');
var router = express.Router();

const { check,  validationResult  } =require('express-validator/check');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const segundo = new Date().getSeconds();

  res.render('index', { 
    title: 'Express',
    valor: '<script>alert("envia 1 bitcoin a ... para limpiar tu navegador")</script>',
    condicion: {
      segundo: segundo,
      estado: segundo % 2 === 0
    },
    users: [
      {name: 'Jhones', age: 29 },
      {name: 'Smith', age: 22 },
      {name: 'Brown', age: 25 }
    ]
  
  });
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
