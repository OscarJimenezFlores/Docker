const express = require('express');
const connectDB = require('./db'); // Importa la conexión a la base de datos

const app = express();
const PORT = 3000;

// Conectar a la base de datos
connectDB();

app.get('/', (req, res) => {
    res.send('Hola mundo, mi nombre es Oscar Jimenez');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
