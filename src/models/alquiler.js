const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlquilerSchema = Schema({
    direccion: String,
    picture: String,
    price: {type: Number, default: 0},
    category: {type: String, enum:['departamento', 'minidepartamento', 'habitacion']},
    description: String
})

module.exports = mongoose.model('alquiler', AlquilerSchema)