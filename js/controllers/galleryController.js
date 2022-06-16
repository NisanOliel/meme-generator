'use strict'

var elGallery = document.querySelector('.gallery-container .main-layout')
var elEditor = document.querySelector('.editor')
var elAbout = document.querySelector('.about')
var elMenu = document.querySelector('.menu-toggle')

function renderGallery() {
    console.log('HAHA');
    var strHTMLs = gImgs.map(img =>
        ` <img onclick="onImgSelect(${img.id})" class="img-${img.id}" src="${img.url}">`
    )

    elGallery.innerHTML = strHTMLs.join('')
}

function onImgSelect(imgId) {

    elGallery.style.display = 'none'
    elEditor.style.display = 'flex'
    setImg(imgId)
    renderMeme()
}

function onGallerySelcet() {
    elEditor.style.display = 'none'
    toggleMenu(elMenu)
    elGallery.style.display = 'grid'
}

