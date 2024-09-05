const {aluguel} = require('../data')

const buscarData = (req, res) => {
    const {data} = req.query
    const alugueis = aluguel.find((a)=> a.dataAluguel == data)

    if (alugueis){
        res.status(200).send(alugueis)
    } else {
        res.status(404).send('Data nao encontrada')
    } 
}

module.exports = buscarData