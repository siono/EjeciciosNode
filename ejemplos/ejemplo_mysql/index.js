"use strict"

//cargamos el driver
const mysql = require('mysql');

//crear una conexión
const connection = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

//conectar
connection.connect((err) =>{
    if (err){
        console.log('Hubo un error al conectarse a la BBSS', err);
        process.exit(1);
        return;
    } 
});

//lanzar una query
connection.query('SELECT * FROM agentes',(err, rows, fields)=>{
    if (err){
        console.log('Hubo un error', err);
        process.exit(1);
        return;
    }
    for (let i= 0; i < rows.length; i++){
        const agente = rows[i];
        console.log(agente.idagentes, agente.name, agente.age);
    }
});

//pintar los resultados