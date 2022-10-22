import express from "express";


const app = express()


app.get('/', (req, res) =>{
    res.send('Hello World!!!');
});

app.listen(3100)
console.log('Servidor en Ejecución en el Puerto ', 3100)



