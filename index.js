const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const { livros, aluguel, estudante } = require('./data')

app.get('/', (req, res) => {
    res.send('Servidor express está funcionando!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

// rotas para os livros 
const adicionarLivro = require('./livro/adicionarLivro')
app.post('/livro', adicionarLivro)

const listarLivros = require('./livro/listarLivros')
app.get('/livro', listarLivros)

const atualizarLivro = require('./livro/atualizarLivro')
app.put('/livro/:id', atualizarLivro)

const deletarLivro = require('./livro/deletarLivro')
app.delete('/livro/:id', deletarLivro)

const buscarTitulo = require('./livro/buscarTitulo')
app.get('/livro/titulo', buscarTitulo)

const buscarAutor = require('./livro/buscarAutor')
app.get('/livro/autor', buscarAutor)

const buscarGenero = require('./livro/buscarGenero')
app.get('/livro/genero', buscarGenero)

const buscarAno = require('./livro/buscarAno')
app.get('/livro/ano', buscarAno)

//rotas para os alugueis
const criarAluguel = require('./alugueis/criarAluguel')
app.post('/aluguel', criarAluguel)

const listarAlugueis = require('./alugueis/listarAlugueis')
app.get('/aluguel', listarAlugueis)

const atualizarAluguel = require('./alugueis/atualizarAluguel')
app.put('/aluguel/:id', atualizarAluguel)

const deletarAluguel = require('./alugueis/deletarAluguel')
app.delete('/aluguel/:id', deletarAluguel)

// rotas para os estudantes
const criarEstudante = require ('./estudantes/adicionarEstudante')
app.post('/estudantes', criarEstudante)

const listarEstudantes = require ('./estudantes/listarEstudante')
app.get('/estudantes', listarEstudantes)

const atualizarEstudante = require ('./estudantes/atualizarEstudante')
app.put('/estudantes', atualizarEstudante)

const deletarEstudante = require ('./estudantes/deletarEstudante')
app.delete('/estudante', deletarEstudante)

const buscarPorMatricula = require('./estudantes/buscarMatricula')
app.get('/estudantes/matricula', buscarPorMatricula)

const buscarNome = require('./estudantes/buscarNome')
app.get('/estudantes/nome', buscarNome)

const buscarCurso = require('./estudantes/buscarCurso')
app.get('/estudantes/curso', buscarCurso)

