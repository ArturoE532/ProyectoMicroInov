const mongoose = require('mongoose');

const MadroñosShcema = new mongoose.Schema({
    especie:{
        type: String,
        required: true
    },
    estados:{
        type: String,
        required: true
    },
    habito:{
        type: String,
        required: true
    },
    corteza_de_la_parte_alta_del_tronco_y_ramas_principales:{
        type: String,
        required: true
    },
    corteza_de_ramillas:{
        type: String,
        required: true
    },
    peciolos:{
        type: String,
        required: true
    },
    hojas_enves:{
        type: String,
        required: true
    },
    flores:{
        type: String,
        required: true
    }
})

const Madroño = mongoose.model('madroños', MadroñosShcema);

module.exports = Madroño;