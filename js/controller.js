'use strict'

var gCanvas
var gCtx


function init() {
    console.log('HEYYY');
    gCanvas = document.getElementById('canvas')
    gCtx = gCanvas.getContext('2d')
    renderGallery()
    renderMeme()

}


