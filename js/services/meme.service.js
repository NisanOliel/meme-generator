'use strict'
var gLineIdx = 0
var yPositon = 100

var gMeme = {
    selecterId: 1,
    selectedLineIdx: 0,
    lines: [
        { text: 'Enter text here', size: 30, align: 'left', color: 'red,', stroke: 'white', posX: 20, posY: 50, font: 'Impact', isDrag: false },
        { text: 'Enter text here', size: 30, align: 'left', color: 'red,', stroke: 'white', posX: 20, posY: 400, font: 'Impact', isDrag: false },
    ]
}

function getMeme() {
    return gMeme
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].text = text

}


function setImg(imgId) {
    gMeme.selecterId = imgId

}


function setColor(color) {
    const { selectedLineIdx } = gMeme
    gMeme.lines[selectedLineIdx].color = color
}
function setStoke(color) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = color
}


function fontSize(size) {
    gMeme.lines[gMeme.selectedLineIdx].size += size

}
function moveLineMove(size) {
    gMeme.lines[gMeme.selectedLineIdx].posY += size

}
function moveLineRightLeft(size) {
    gMeme.lines[gMeme.selectedLineIdx].posX += size

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

function setAlign(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align

    const line = gMeme.lines[gMeme.selectedLineIdx]
    console.log(line.align)
    switch (line.align) {
        case 'left':
            line.posX = 10
            break

        case 'center':
            console.log('gCanvas.width:', gCanvas.width)
            console.log('line.width:', line.width)
            line.posX = 150
            break

        case 'right':
            line.posX = 300
            break
    }

}

//Check if the click is inside the Line 
function isLineClicked(pos) {
    var meme = getMeme()
    var id = 0
    for (var i = 0; i < meme.lines.length; i++) {
        var currLine = meme.lines[i]
        var linePos = { x: currLine.posX - 150, y: currLine.posY - 30 }
        if (pos.x < linePos.x + 400 && pos.y < linePos.y + 60 && pos.x > linePos.x && pos.y > linePos.y) {
            meme.selectedLineIdx = id
            return true
        }
        id++
    }
    return false
}

function setLineDrag(isDrag) {
    gMeme.isDrag = isDrag
}

function moveLine(x, y) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].posX += x
    meme.lines[meme.selectedLineIdx].posY += y
}