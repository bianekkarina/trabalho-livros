const { livros } = require('../data.js')

const buscarAutor = (req, res) => {
    const { autor } = req.query
    const livro = livros.find((livro) => livro.autor.toLowerCase().includes(autor.toLowerCase()))
    
    if (livros.length > 0){
        res.status(200).send(livro)
    } else {
        res.status(404).send('Autor não encontrado.')
    }
}

module.exports = buscarAutor