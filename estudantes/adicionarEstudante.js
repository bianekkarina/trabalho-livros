const {estudantes} = require ('../data')

function criarEstudante(req, res){
    console.log(req.body)
    const NovoEstudante = {
        id: estudantes.length + 1,
        nome: req.body.nome,
        matricula: req.body.matricula,
        curso: req.body.curso,
        ano: req.body.ano,
    }
    estudantes.push(NovoEstudante)
    res.status(201).send({mensagem: 'Estudante adicionado com sucesso!'})
}

module.exports = criarEstudante