'user strict'

// Estrutura antiga que era criada dentro do HTML
{/* 
<a class="card" href="./pages/contato.html">
    <img src="./img/ana-oliveira-dias.png" alt="" class="card__image">
    <h2 class="card_name">Ana Oliveira Dias</h2>
    <div class="card__contact-phone">
        <i class="fas fa-mobile-alt contact-phone__icon"></i>
        <p class="contact-phone__number">11 9 7171-6464</p>
    </div>
    <div class="card__tag-color"></div>
</a> 
*/}

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
        nome: 'Fernando Leonid',
        celular: '11 9 1112-3333',
        foto: './img/logo.png',
        email: 'fernando@gmail.com',
        endereco: 'Rua dos padres, 555',
        cidade: 'Osasco'
    }
]

// Criando os cards a partir do JavaScript
function criarCards(contato){

    const card = document.createElement('a')
    card.className = 'card'
    card.href = './pages/contato.html'
    
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

// Carrega Cards
function carregarCards(){
    
    const container = document.getElementById('card-container')

    // Inserindo na página HTML
    container.appendChild(criarCards(contatos[0]))
    container.appendChild(criarCards(contatos[1]))

}

carregarCards()
































