'use strict'

var gCanvas
var gCtx


function init() {
    console.log('initt');
    gCanvas = document.getElementById('canvas')
    gCtx = gCanvas.getContext('2d')
    renderGallery()

}


