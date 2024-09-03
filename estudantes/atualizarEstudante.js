const {estudante} = require ('../data')
const atualizarEstudante = (req, res) =>{
    const {id} = req.params
    const novoNome = req.body.nome
    const novaMatricula = req.body.matricula
    const novoCurso = req.body.curso
    const novoAno = req.body.ano
    
    const estudante = estudantes.find((estudante) => estudante.id == id)

    if (!estudante){
        return res.status(404).send({mensagem: 'Estudante não encontrado!'})
    }
    estudante.nome = novoNome
    estudante.matricula = novaMatricula
    estudante.curso = novoCurso
    estudante.ano = novoAno
    
    res.status(200).send({mensagem: 'Estudante atualizado com sucesso!',
        estudante: estudante
    })
}   

module.exports = atualizarEstudante