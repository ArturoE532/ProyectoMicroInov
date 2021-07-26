const app = require('./app/app');
const CONFIG = require('./app/configuracion/config');
const morgan = require ('morgan');
const conexion = require ('./app/configuracion/conexion')
const path = require('path')

conexion.connect();

app.use(morgan('dev'));

app.set('views', path.join(__dirname, '/app/vistas'));
app.set('view engine', 'ejs');

app.listen(CONFIG.PORT, function(erro){
    if(erro) return console.log(erro);
    console.log(`Servidor en el puerto ${CONFIG.PORT}`);
});

