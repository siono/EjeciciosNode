"use strict";

function sumaSincrona(a,b){
    return a + b;
}

function sumaAsincrona(a,b,callback){
    //operación asíncrona
    setTimeout(()=>{
        const resultado = a + b;
        callback(null,resultado);
    },1000);
}

sumaAsincrona(1,7,(error,resultado)=>{
    if (error) return console.log('Ha habido un error en la función.')
    console.log('Resultado de la operación:',resultado)
});