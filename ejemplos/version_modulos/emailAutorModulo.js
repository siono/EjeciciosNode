"use strict";

const fs = require('fs');
const path = require('path');

function nameAutorModulo(nombreModulo,callback){

    //ruta fichero -> node_modules/package.json
    const fichero = path.join('.','node_modules',nombreModulo,'package.json');

    fs.readFile(fichero,'utf8',(error,data)=>
        {
            if (error) return callback(error);
            //console.log('Datos del contenido',data);

            const packageInfo= JSON.parse(data);

            //console.log(packageInfo.maintainers[0]);

            callback(null,packageInfo.maintainers[0].email);
        }
    );
    
}

nameAutorModulo('chance',(error,autorModulo)=>{
    if (error){
        console.log('Error ',error);
        return;
    }
    console.log(`El email del autor del módulo 'chance' es ${autorModulo}`);
})