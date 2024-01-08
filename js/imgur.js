export async function uploadImgur(file){
    const client_id = 'f1fa38842676805'
    const url = 'https://api.imgur.com/3/image'

    //https://apidocs.imgur.com/#intro

    const data = new FormData()
    data.append('image', file)

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Cliente-ID ${client_id}`
        },
        body: data
    }
    const response = await fetch(url, options)
    const image = await response.json()
    return image.data.link

}