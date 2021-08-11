const express = require('express');
const ControladorMadro = require('../controlador/ControladorMadro')

const Router = express.Router();
  
Router  .get('/',ControladorMadro.inicio)
        .get('/glosario',ControladorMadro.glosario)
        .get('/login',ControladorMadro.login)
        .get('/nosotros',ControladorMadro.nosotros)
      
        .get('/informacion',ControladorMadro.index)
        .post('/a',ControladorMadro.crear)
        .get('/:key/:value',ControladorMadro.buscar,ControladorMadro.mostrar)
        .get('/info/:key/:value',ControladorMadro.buscar,ControladorMadro.mostrarone)
        /*.put('/:key/:value',ControladorMadro.buscar,ControladorMadro.actualizar)
        .delete('/:key/:value',ControladorMadro.buscar,ControladorMadro.eliminar);
*/

module.exports = Router;