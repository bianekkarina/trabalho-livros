const { livros } = require('../data.js')

const listarLivros = (req, res) => {
    res.status(200).send(livros)
}

module.exports = listarLivros