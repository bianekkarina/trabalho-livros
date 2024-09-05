const {estudantes} = require('../data')

const buscarPorMatricula = (req, res) => {
const {matricula} = req.query
const estudante = estudantes.find((estud) => estud.matricula == matricula)
    console.log(estudante)
    if (estudantes.length > 0){
        res.status(200).send(estudante)
    }else{
        res.status(404).send({menssagem: 'Matricula não encontrada'})
    }

}


module.exports = buscarPorMatricula