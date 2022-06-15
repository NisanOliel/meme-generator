'use strict'
var nextId = 0
var gLineIdx = 0

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
    lines: [
        { text: 'Enter text here', size: 20, align: 'left', color: 'red,' },
        { text: 'Enter text here', size: 30, align: 'left', color: 'red,' },
    ]
}


function getMeme() {
    return gMeme
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].text = text

}


function setImg(imgId) {
    gMeme.selecterId = imgId

}


function inputColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function fontSize(size) {
    gMeme.lines[gMeme.selectedLineIdx].size += size

}

function changeLines() {
    debugger
    gLineIdx++
    if (gLineIdx >= gMeme.lines.length) {
        gLineIdx = 0
    }
    gMeme.selectedLineIdx = gLineIdx


}