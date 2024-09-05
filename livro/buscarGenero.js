const { livros } = require('../data.js')

const buscarGenero = (req, res) => {
    const { genero } = req.query
    const livro = livros.find((livro) => livro.genero.toLowerCase().includes(genero.toLowerCase()))
    
    if (livros.length > 0){
        res.status(200).send(livro)
    } else {
        res.status(404).send('Genero não encontrado.')
    }
}

module.exports = buscarGenero