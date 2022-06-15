'use strict'
var nextId = 0

var gImgs = [
    { id: nextId++, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: nextId++, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
    { id: nextId++, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
    { id: nextId++, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: nextId++, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
    { id: nextId++, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
];


var gMeme = {
    selecterId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Enter text here',
        size: 20,
        align: 'left',
        color: 'red,'
    }]
}


function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt

}


function setImg(imgId) {
    gMeme.selecterId = imgId

}