
//const express = require('express');
import express from "express";

const app = express();

const port = 4000;

app.get('/', (req, res) => {
    return res.send('<h1> Hola Calvito</h1>')
})

app.listen(port, () => {
    console.log(`El Servidor inició correctamente en el puerto: ${port}`);

})






//Puerto localHost: 4000

//configuracion del servidor: Si acepto archivos json, cors, y demas.

//API REST

//routers: url, parametros, ect.

//funciones

//base de datos [X]