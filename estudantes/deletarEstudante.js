const {estudantes} = require ('../data')

const deletarEstudante = (req, res) => {
    const {id} = req.params
    const index = estudantes.findIndex((estudante) => estudante.id ==id)

    if(index === -1){
        return res.status(404).send('estudante não encontrado')
    }
    const estudanteDeletado = estudantes.splice(index, 1)[0]
    
    res.status(200).send({
        mesagem: 'Estudante deletado com sucesso:',
        estudante: estudanteDeletado
    })
}

module.exports = deletarEstudante
