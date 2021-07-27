const mongoose = require('mongoose');

const madronosShcema = new mongoose.Schema({
    especie:{
        type: String,
        required: true
    },
    estados:{
        type: Array,
        required: true
    },
    habito:{
        type: Array,
        required: true
    },
    corteza_de_la_parte_alta_del_tronco_y_ramas_principales:{
        type: Array,
        required: true
    },
    corteza_de_ramillas:{
        type: Array,
        required: true
    },
    peciolos:{
        type: Array,
        required: true
    },
    hojas_enves:{
        type: Array,
        required: true
    },
    flores:{
        type: Array,
        required: true
    }
  })

const Madrono = mongoose.model('madronos', madronosShcema);

module.exports = Madrono;