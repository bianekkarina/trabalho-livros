livros = [
    { id: 1, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', ano: 1997, genero: 'Fantasia' },
    { id: 2, titulo: 'Jantar Secreto', autor: 'Raphael Montes', ano: 2016, genero: 'Suspense' }
]

let aluguel = [
    {   id: 1,
        idLivro: 1,
        idEstudante: 1,
        dataAluguel: '12/08/2024',
        dataDevolucao: '12/09/2024'
    }
]


module.exports = { livros,aluguel }