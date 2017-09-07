"use strict";

const versionModulo = require('./versionModulo');
const fs = require('fs');
const async = require('async');

function versionModulos(callback){
  //leer contenido de la carpeta de node_modules
  fs.readdir('./node_modules', (err, lista) =>{
    if (err){
      return callback(err);
    }
    //console.log(lista);
    //sacar nombre y versión de cada módulo
    async.concat(lista,function iterador(item, callbackIteracionEnCurso){
      

      //excluimos la carpeta .bin y otros posibles ficheros ocultos
      if (item[0] === '.'){ //si la primera letra es un '.'
        process.nextTick(()=>{ //no hacemos nada, y metemos la llamada en la siguiente vuelta del event loop.
          callbackIteracionEnCurso(null);
        });
        return;
      }

      versionModulo(item, (error, version) => {
        if (error) {
          callbackIteracionEnCurso(error);
          return;
        }
        callbackIteracionEnCurso(null, {item,version});
      })


      
    },callback);
  });


  


  // devolver la lista de módulos
}

/*  */

versionModulos((err,listaModulos)=>{
  if (err){
    return console.log('Hubo un error', err);
  }
  console.log(listaModulos);
})
