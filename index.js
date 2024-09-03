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
const adicionarLivro = require('./livro/adicionarLivro')
app.post('/livro', adicionarLivro)

const listarLivros = require('./livro/listarLivros')
app.get('/livro', listarLivros)

const atualizarLivro = require('./livro/atualizarLivro')
app.put('/livro/:id', atualizarLivro)

const deletarLivro = require('./livro/deletarLivro')
app.delete('/livro/:id', deletarLivro)
