'user strict'

export function preview(idFile, idImg){
    const file = document.getElementById(idFile).files[0]
    const image = document.getElementById(idImg)
    const fileReader = new FileReader()

    fileReader.onloadend = () => image.src = fileReader.result

    if(file){
        fileReader.readAsDataURL(file)
    }else{
        image.src = ''
    }
}