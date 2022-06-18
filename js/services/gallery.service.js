'use strict'

var nextId = 1
var gFilterBy


var gImgs = [
    { id: nextId++, url: 'img/1.jpg', keywords: ['politician', 'men'] },
    { id: nextId++, url: 'img/2.jpg', keywords: ['dog'] },
    { id: nextId++, url: 'img/3.jpg', keywords: ['dog', 'baby'] },
    { id: nextId++, url: 'img/4.jpg', keywords: ['cat'] },
    { id: nextId++, url: 'img/5.jpg', keywords: ['funny', 'baby'] },
    { id: nextId++, url: 'img/6.jpg', keywords: ['men'] },
    { id: nextId++, url: 'img/7.jpg', keywords: ['baby'] },
    { id: nextId++, url: 'img/8.jpg', keywords: ['men'] },
    { id: nextId++, url: 'img/9.jpg', keywords: ['funny', 'baby'] },
    { id: nextId++, url: 'img/10.jpg', keywords: ['funny', 'men', 'politician'] },
    { id: nextId++, url: 'img/11.jpg', keywords: ['men'] },
    { id: nextId++, url: 'img/12.jpg', keywords: ['men'] },
    { id: nextId++, url: 'img/13.jpg', keywords: ['funny', 'men'] },
    { id: nextId++, url: 'img/14.jpg', keywords: ['men'] },
    { id: nextId++, url: 'img/15.jpg', keywords: ['men'] },
    { id: nextId++, url: 'img/16.jpg', keywords: ['funny', 'men'] },
    { id: nextId++, url: 'img/17.jpg', keywords: ['baby', 'politician'] },
];



function renderGallery() {
    console.log('rendergaller')
    var imgs = gImgs
    if (gFilterBy) imgs = imgs.filter(img => img.keywords.includes(gFilterBy))

    var strHTMLs = imgs.map(img =>
        ` <img onclick="onImgSelect(${img.id})" class="img-${img.id}" src="${img.url}">`
    )

    elGallery.innerHTML = strHTMLs.join('')
}


function renderSaved() {
    var elEditor = document.querySelector('.editor')
    elEditor.style = 'none'
    var elGallery = document.querySelector('.gallery-container .main-layout')
    elGallery.style = 'grid'

    var imgs = gSavedMemes
    var strHTMLs = imgs.map(img =>
        ` <img onclick="onSavedSelect(${img.selecterId})" class="img-${img.selecterId}" src="${`img/${img.selecterId}.jpg`}">`
    )

    elGallery.innerHTML = strHTMLs.join('')
}