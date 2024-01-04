'user strict'

const contatos = [
    {
        id: 1,
        nome: 'Ana Maria Oliveira Dias',
        celular: '11 9 7171-6464',
        foto: './img/ana-oliveira-dias.png',
        email: 'ana@gmail.com',
        endereco: 'Av. São Joaquim, 234',
        cidade: 'Sorocaba'
    },
    {
        id: 2,
        nome: 'Hugo Freitas',
        celular: '11 9 7575-8888',
        foto: './img/hugo-freitas.png',
        email: 'ana@gmail.com',
        endereco: 'Av. São Joaquim, 234',
        cidade: 'Sorocaba'
    },
    {
        id: 3,
        nome: 'Fernando Leonid',
        celular: '11 9 1112-3333',
        foto: './img/fernando-leonid.jpg',
        email: 'fernando@gmail.com',
        endereco: 'Rua dos padres, 555',
        cidade: 'Osasco'
    }
]

function buscarContato(){
    const id = localStorage.getItem('id')
    const [contato] = contatos.filter( contato => contato.id == id )
    return contato 
}

function preencherFormulario(){
    const contato = buscarContato()
    document.getElementById('nome').value = contato.nome
    document.getElementById('email').value = contato.email
    document.getElementById('celular').value = contato.celular
    document.getElementById('endereco').value = contato.endereco
    document.getElementById('cidade').value = contato.cidade
}

preencherFormulario()































