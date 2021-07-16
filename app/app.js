const express = require('express');
const RutasMadroños = require('./rutas/RutasVinos')

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/madroños',RutasMadroños);

module.exports = app;