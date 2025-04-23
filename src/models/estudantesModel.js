const mongoose = require('mongoose');

const Estudante = mongoose.model('Estudante', {
    nome: String,
    matricula: String,
    curso: String,
    ano: String,
})

module.exports = Estudante