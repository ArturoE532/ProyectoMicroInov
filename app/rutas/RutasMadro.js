const express = require('express');
const ControladorMadro = require('../controlador/ControladorMadro')
const Madrono = require('../modelos/ModeloMadro');

const Router = express.Router();

/*Router.get('/', async (req, res) => {
        const madronos = await Madrono.find();
        res.render('index', {
          madronos
        });
      });
      */
     
Router  .get('/',ControladorMadro.index)
        .post('/',ControladorMadro.crear)
        .get('/:key/:value',ControladorMadro.buscar,ControladorMadro.mostrar)
        /*.put('/:key/:value',ControladorMadro.buscar,ControladorMadro.actualizar)
        .delete('/:key/:value',ControladorMadro.buscar,ControladorMadro.eliminar);
*/
module.exports = Router;