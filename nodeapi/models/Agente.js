"use strict";

const mongoose = require('mongoose');

//definir un esquema
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});

//crear el modelo
const Agente = mongoose.model('Agente', agenteSchema);

//No es necesario exportar el modelo
//ya que moongoose ya lo conoce pero si lo hacemos seria de la siguente forma
module.exports= Agente;