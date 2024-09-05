const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor express está funcionando!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

// rotas para os livros 
/*const adicionarLivro = require('./livro/adicionarLivro')
app.post('/livro', adicionarLivro)

const listarLivros = require('./livro/listarLivros')
app.get('/livro', listarLivros)

const atualizarLivro = require('./livro/atualizarLivro')
app.put('/livro/:id', atualizarLivro)

const deletarLivro = require('./livro/deletarLivro')
app.delete('/livro/:id', deletarLivro)
*/

//rotas para os alugueis
const criarAluguel = require('./alugueis/criarAluguel')
app.post('/aluguel', criarAluguel)

const listarAlugueis = require('./alugueis/listarAlugueis')
app.get('/aluguel', listarAlugueis)

const atualizarAluguel = require('./alugueis/atualizarAluguel')
app.put('/aluguel/:id', atualizarAluguel)

const deletarAluguel = require('./alugueis/deletarAluguel')
app.delete('/aluguel/:id', deletarAluguel)


const buscarIdLivro = require('./alugueis/buscarIdLivro')
app.get('/aluguel/IdLivro', buscarIdLivro)

const buscarIdEstudante = require('./alugueis/buscarIdEstudante')
app.get('/aluguel/idEstudante', buscarIdEstudante)