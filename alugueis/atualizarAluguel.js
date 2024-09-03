const { aluguel } = require('../data')

const atualizarAluguel = (req,res) => {
    const { id } = req.params
    const novaDataAluguel = req.body.dataAluguel
    const novaDataDevolucao = req.body.dataDevolucao

    const alugueis = aluguel.find((a) => a.id == id)

    if(!alugueis){
        return res.status(404).send({message: 'Aluguel não encontrado'})
    }

    alugueis.dataAluguel = novaDataAluguel
    alugueis.dataDevolucao = novaDataDevolucao
    res.status(200).send({
        message: 'Aluguel editado com sucesso',
        alugueis: alugueis
    })
}

module.exports = atualizarAluguel