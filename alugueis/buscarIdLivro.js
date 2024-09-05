const { aluguel } = require('../data')

const buscarIdLivro = (req,res) => {
    const { idLivro } = req.query
    const alugueis = aluguel.find((a) => a.idLivro == idLivro)

    if(alugueis) {
        res.status(200).send(alugueis)
    }else {
        res.status(404).send('Id do livro não encontrado')
    }
}

module.exports = buscarIdLivro