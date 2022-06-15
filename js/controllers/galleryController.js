'use strict'

var elGallery = document.querySelector('.gallery-container .main-layout')
var elEditor = document.querySelector('.editor')

function renderGallery() {
    console.log('HAHA');
    var strHTMLs = gImgs.map(img =>
        ` <img onclick="onImgSelect(${img.id + 1})" class="img-${img.id + 1}" src="${img.url}">`
    )

    elGallery.innerHTML = strHTMLs.join('')
}

function onImgSelect(imgId) {

    elGallery.style.display = 'none'
    elEditor.style.display = 'block'
    setImg(imgId)
    renderMeme()
}

