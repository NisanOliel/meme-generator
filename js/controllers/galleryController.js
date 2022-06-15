'use strict'

var elGallery = document.querySelector('.gallery-container .main-layout')
var elEditor = document.querySelector('.editor')
var elAbout = document.querySelector('.about')

function renderGallery() {
    console.log('HAHA');
    var strHTMLs = gImgs.map(img =>
        ` <img onclick="onImgSelect(${img.id + 1})" class="img-${img.id + 1}" src="${img.url}">`
    )

    elGallery.innerHTML = strHTMLs.join('')
}

function onImgSelect(imgId) {

    elAbout.style.display = 'none'
    elGallery.style.display = 'none'
    elEditor.style.display = 'flex'
    setImg(imgId)
    renderMeme()
}

function onGallerySelcet() {
    elEditor.style.display = 'none'
    elAbout.style.display = 'block'
    elGallery.style.display = 'grid'
}

