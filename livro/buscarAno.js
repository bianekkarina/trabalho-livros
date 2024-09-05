const { livros } = require('../data.js')

const buscarAno = (req, res) => {
    const { ano } = req.query
    const livro = livros.find((l) => l.ano == ano)
    
    if (livros.length > 0){
        res.status(200).send(livro)
    } else {
        res.status(404).send('Ano não encontrado.')
    }
}

module.exports = buscarAno
