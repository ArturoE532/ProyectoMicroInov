const express = require('express');
const ControladorMadro = require('../controlador/ControladorMadro')
const Madrono = require('../modelos/ModeloMadro');

const Router = express.Router();
  
Router  .get('/inicio',ControladorMadro.inicio)
        .get('/',ControladorMadro.index)
        .post('/',ControladorMadro.crear)
        .get('/:key/:value',ControladorMadro.buscar,ControladorMadro.mostrar)
        .get('/info/:key/:value',ControladorMadro.buscar,ControladorMadro.mostrarone)
        /*.put('/:key/:value',ControladorMadro.buscar,ControladorMadro.actualizar)
        .delete('/:key/:value',ControladorMadro.buscar,ControladorMadro.eliminar);
*/

module.exports = Router;