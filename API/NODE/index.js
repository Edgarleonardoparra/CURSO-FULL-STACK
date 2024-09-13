const express = require('express');
const app = express();
const port = 3000;

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Define una ruta
app.get('/', (req, res) => {
    res.send("<h1>Hola Mundo </h1>");
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});