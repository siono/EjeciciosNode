"use strict";

const express = require('express');
const router = express.Router();

//Para recuperar el modelo podemos utilizar dos opciones

//1
//Le pedimos a moongose que nos de el modelo
//const mongoose = require('mongoose');
//const Agente = mongoose.model('Agente')

//2
//Lo exportamos en Agente con module.export y hacemos un require aqui
const Agente = require('../../models/Agente');

router.get('/', (req, res, next) => {

    //recuperamos una lista de agentes
    Agente.find({}, (err, lista) => {
        if (err){
            consele.log('Error', err);
            next(err); //para que retorne la página de erro
            return;
        }
        res.json({ sucess: true, rows: lista});
    });

});

module.exports = router;