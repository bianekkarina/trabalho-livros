const { aluguel } = require('../data')

const buscarIdEstudante = (req,res) => {
    const {idEstudante } = req.query
    const alugueis = aluguel.find((a) => a.idEstudante == idEstudante)


    if(alugueis){
        res.status(200).send(alugueis)
    }else{
        res.status(404).send('Id do estudante não encontrado')
    }
}

module.exports = buscarIdEstudante