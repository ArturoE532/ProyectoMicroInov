const mongoose = require('mongoose');

const madronosShcema = new mongoose.Schema({
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
    corteza_de_la_parte_a_:{
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

const Madrono = mongoose.model('madronos', madronosShcema);

module.exports = Madrono;