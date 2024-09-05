const { livros } = require('../data.js')

const buscarTitulo = (req, res) => {
    const { titulo } = req.query
    const livro = livros.find((livro) => livro.titulo.toLowerCase().includes(titulo.toLowerCase()))
    console.log(livro)
    
    if (livros.length > 0){
        res.status(200).send(livro)
    } else {
        res.status(404).send('Livro não encontrado.')
    }
}

module.exports = buscarTitulo