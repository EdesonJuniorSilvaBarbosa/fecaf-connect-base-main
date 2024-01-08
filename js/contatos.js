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










