'use strict'

var elGallery = document.querySelector('.gallery-container .main-layout')
var elEditor = document.querySelector('.editor')
var elAbout = document.querySelector('.about')
var elMenu = document.querySelector('.menu-toggle')
var elSearch = document.querySelector('.search-container')
var elUpload = document.querySelector('.upload-img')

var keySize = {
    'Politician': 10,
    'Cat': 12,
    'Dog': 14,
    'Baby': 20,
    'Men': 18,
    'Funny': 16,
}


function onImgSelect(imgId) {
    elSearch.style.display = 'none'
    elGallery.style.display = 'none'
    elEditor.style.display = 'flex'
    elUpload.style.display = 'none'
    resetMeme()
    document.querySelector('.top-text').value = ''
    setImg(imgId)
    renderMeme()
}

function onSavedSelect(imgId) {
    elSearch.style.display = 'none'
    elGallery.style.display = 'none'
    elEditor.style.display = 'flex'

    // resetMeme()
    // document.querySelector('.top-text').value = ''
    setImg(imgId)
    renderMeme()
}



function onGallerySelcet() {
    gFilterBy = ''
    renderGallery()
    elEditor.style.display = 'none'
    elSearch.style.display = 'block'
    toggleMenu(elMenu)
    elGallery.style.display = 'grid'
    elUpload.style.display = 'block'

}

function onSetFilterText(txt) {
    gFilterBy = txt.toLowerCase()
    renderGallery()

}



function onKeyFilterClick(el, txt) {
    if (keySize[txt] === 50) keySize[txt] = 10
    keySize[txt] += 1
    onSetFilterText(txt)
    el.style.fontSize = keySize[txt] + 'px'

}