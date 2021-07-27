const express = require('express');
const RutasMadro = require('./rutas/RutasMadro')
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/madronos',RutasMadro);

module.exports = app;