const { estudantes } = require('../data.js')

const buscarNome = (req, res) => {
    const { nome } = req.query
    const estudante = estudantes.find((estudante) => estudante.nome.toLowerCase().includes(nome.toLowerCase()))

    if (estudantes.length > 0) {
        res.status(200).send(estudante)
    } else {
        res.status(404).send('Estudante não encontrado.')
    }
}

module.exports = buscarNome