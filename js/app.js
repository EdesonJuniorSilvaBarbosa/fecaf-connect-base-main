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

function criarCards(contato){

    const card = document.createElement('a')
    card.className = 'card'
    card.href = './pages/contato.html'
    card.onclick = () => localStorage.setItem('id', contato.id)
    
    card.innerHTML = 
    `   <img src="${contato.foto}" alt="" class="card__image">
        <h2 class="card_name">${contato.nome}</h2>
        <div class="card__contact-phone">
        <i class="fas fa-mobile-alt contact-phone__icon"></i>
        <p class="contact-phone__number">${contato.celular}</p>
        </div>
        <div class="card__tag-color"></div>    
    `
    return card
}

function carregarCards(){
    
    const container = document.getElementById('card-container')

    const cards = contatos.map(criarCards)

    container.replaceChildren(...cards)

}

carregarCards()

document.getElementById('novo-contato').addEventListener('click', () => localStorage.clear())





























