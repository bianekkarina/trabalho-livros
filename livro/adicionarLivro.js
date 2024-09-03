const { livros } = require('../data.js')

const adicionarLivro = (req, res) => {
    const novoLivro = {
        id: livros.length + 1,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        genero: req.body.genero
    }

    livros.push(novoLivro)
    res.status(201).send({
        message: 'Um novo livro foi adicionado com sucesso!',
        livro: novoLivro
    })
}

module.exports = adicionarLivro