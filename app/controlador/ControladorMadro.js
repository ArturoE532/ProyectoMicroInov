const { Mongoose } = require('mongoose');
const ModeloMadro = require('../modelos/ModeloMadro');
const path = require('path');

function inicio(req, res) {
    res.sendFile(path.join(__dirname, '../vistas/inicio.html'));
}

function index(req, res) {
    console.log('ok');
    ModeloMadro.find({})
        .then(madronos => {
            if (madronos.length) return res.status(200).render('index', {
                madronos
            });
            return res.status(204).send({ message: 'No hay madronos' })
        }).catch(error => res.status(500).send({ error }));
}

function crear(req, res) {
    new ModeloMadro(req.body).save()
        .then(madronos => res.status(200).send({ madronos }))
        .catch(error => res.status(500).send({ error }));
}

function buscar(req, res, next) {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    ModeloMadro.find(consulta).then(madronos => {
        if (!madronos.length) return next();
        req.body.madronos = madronos;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    })
}

function mostrar(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.madronos) return res.status(404).send({ message: "No se encontro ningun madrono" });
    let madronos = req.body.madronos;
    return res.status(200).render('index', {
        madronos
    });
}

function mostrarone(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.madronos) return res.status(404).send({ message: "No se encontro ningun madrono" });
    let madronos = req.body.madronos;
    console.log(madronos)
    return res.status(200).render('edit', {
        madronos: madronos
    });
    /*send({madronos});*/
}

/*function actualizar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.madronos) return res.status(404).send({message: "No se puede actullizar el madrono"});
    let madronoOBJ = req.body.madronos[0];
    madronoObj = Object.assign(madronoOBJ,req.body);
    madronoOBJ.save().then(madronosAlta => {
        res.status(200).send({message: "El registro se actualizo correctamente",madronosAlta});
    }).catch(error => res.status(500).send({error}));
}

function eliminar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.madronos) return res.status(404).send({message: "No se puede eliminar"});
    req.body.madronos[0].remove().then(madronosEliminar => {
        res.status(200).send({message: "El registro se elimino correctamente",madronosEliminar});
    }).catch(error => res.status(500).send({error}));
    
}*/

module.exports = {
    inicio,
    index,
    crear,
    buscar,
    mostrar,
    mostrarone
    /*actualizar,
    eliminar*/
}