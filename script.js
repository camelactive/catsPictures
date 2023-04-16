const content_picture = document.querySelector(".content-picture")

async function getPicture(){
    const urlCats = "https://api.thecatapi.com/v1/images/search"
    const answer = await fetch(urlCats)
    const data = await answer.json()
    content_picture.innerHTML = 
    `<img = src="${data[0].url}">
    `
}
getPicture()