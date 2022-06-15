'use strict'
var nextId = 0
var gLineIdx = 0
var yPositon = 100


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
        { text: 'Enter text here', size: 30, align: 'left', color: 'red,', stroke: 'black', posX: 20, posY: 50, font: 'Impact' },
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


function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}
function setStoke(color) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = color
}


function fontSize(size) {
    gMeme.lines[gMeme.selectedLineIdx].size += size

}
function moveLine(size) {
    gMeme.lines[gMeme.selectedLineIdx].posY += size

}

function addLine() {
    var line =
    {
        text: 'Enter text here', size: 30, align: 'left', color: 'red,',
        stroke: 'black', posX: 20, posY: yPositon
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1

    yPositon += 50
    if (yPositon === 400) yPositon = 50
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = gMeme.lines.length - 1

}


function changeLines() {
    gLineIdx++
    if (gLineIdx >= gMeme.lines.length) {
        gLineIdx = 0
    }
    gMeme.selectedLineIdx = gLineIdx
}

function setFontFamily(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font

}