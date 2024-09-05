const {estudantes} = require('../data')


const listarEstudante = (req, res) => {
    res.status(200).send(estudantes)
}

module.exports = listarEstudante