'use strict'

async function buscarImagem (raca){
    console.log ('teste 124')
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message
}


async function mostrarImagens (){
    const container = document.getElementById("container")
    const raca = document.getElementById('input').value.toLowerCase()

    const urls = await buscarImagem(raca)

    container.replaceChildren() //Limpar antes de inserir

    urls.forEach(url => { 
        const a = document.createElement("a")
       
        const img = document.createElement("img")
        img.classList.add('dog')

        img.src = url
        a.href = img.src
        a.appendChild(img)
        container.appendChild(a)
        
    });
}

document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        mostrarImagens()
    }
})