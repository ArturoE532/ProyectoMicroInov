const express = require('express');
const RutasMadro = require('./rutas/RutasMadro')
const path = require('path')
const app = express();
const morgan = require('morgan');

//app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//app.set('views', path.join(__dirname, 'vistas'));
//app.set('view engine', 'ejs');

app.use('/madronos',RutasMadro);

module.exports = app;