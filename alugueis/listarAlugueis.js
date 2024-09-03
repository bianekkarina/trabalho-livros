const { aluguel } = require('../data')

const listarAlugueis = (req,res) => {
    res.status(200).send(aluguel)
}

module.exports = listarAlugueis