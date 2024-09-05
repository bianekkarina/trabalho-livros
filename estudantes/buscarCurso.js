const { estudantes } = require('../data.js')

const buscarCurso = (req, res) => {
    const { curso } = req.query
    const estudante = estudantes.find((estudante) => estudante.curso.toLowerCase().includes(curso.toLowerCase()))

    if (estudantes.length > 0) {
        res.status(200).send(estudante)
    } else {
        res.status(404).send('Curso não encontrado.')
    }
}

module.exports = buscarCurso