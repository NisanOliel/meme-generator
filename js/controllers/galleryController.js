'use strict'

function renderGallery() {
    console.log('HAHA');
    var strHTMLs = gImgs.map(img =>
        ` <img onclick="onImgSelect(${img.id})" class="img-${img.id}" src="${img.url}">`
    )

    var elGallery = document.querySelector('.gallery-container .main-layout')
    elGallery.innerHTML = strHTMLs.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
}