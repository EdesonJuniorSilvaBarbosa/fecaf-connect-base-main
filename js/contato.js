'user strict'
import { preview } from "./preview.js"
import { getContato } from "./contatos.js"

async function buscarContato(){
    const id = localStorage.getItem('id')
    const contato = await getContato(id)
    return contato 
}

const habilitarCampo = campo => campo.disabled = false
const trocarBotao = botao => botao.classList.toggle('oculto')
function habilitarFormulario(){
    document.querySelectorAll('input').forEach(habilitarCampo)
    document.querySelectorAll('.button').forEach(trocarBotao)
}

async function preencherFormulario(){
    const contato = await buscarContato()
    if (contato == undefined){
        habilitarFormulario()
        return false
    }
    document.getElementById('nome').value = contato.nome
    document.getElementById('email').value = contato.email
    document.getElementById('celular').value = contato.celular
    document.getElementById('endereco').value = contato.endereco
    document.getElementById('cidade').value = contato.cidade
    document.getElementById('imagePreview').src = contato.foto
}

preencherFormulario()

document.getElementById('editar').addEventListener('click', habilitarFormulario)
document.getElementById('inputFile').addEventListener('change', () => preview('inputFile', 'imagePreview'))




























