const { livros } = require('../data.js')

const deletarLivro = (req, res) => {
    const { id } = req.params
    const index = livros.findIndex((liv) => liv.id == id)

    if (index === -1) {
        return res.status(400).send('Livro não encontrado!')
    }

    const livroDeletado = livros.splice(index, 1)[0]

    res.status(200).send({
        message: 'Livro deletado com sucesso!',
        livro: livroDeletado
    })
}

module.exports = deletarLivro 