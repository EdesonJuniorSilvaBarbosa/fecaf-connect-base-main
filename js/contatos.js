'user strict'

export async function getContatos(){
    const url = 'https://backend-fecaf-connect.vercel.app/contatos'

    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getContato(id){
    const url = `https://backend-fecaf-connect.vercel.app/contatos/${id}`

    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function postContato(contato){
    const url = 'https://backend-fecaf-connect.vercel.app/contatos'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    return response.ok
}

export async function putContato(contato){
    const url = `https://backend-fecaf-connect.vercel.app/contatos/${contato.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    return response.ok
}






