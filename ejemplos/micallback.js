"use strict";

function escribe(texto, callback){
    console.log(texto);
    callback();
}

function serie(n,fn,callbackFinalizacion) {
    if (n==0) return callbackFinalizacion();
    n--;
    fn('texto'+n,()=>{serie(n,fn,callbackFinalizacion)});
}

serie(4,escribe,()=>{console.log('fin')});