'use strict'


function renderMeme() {
    console.log('RenderMeME');
    var meme = getMeme()
    var img = new Image()
    // img.src = `img/${meme.selecterId}.jpg`
    img.src = gImgs[meme.selecterId].url
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        meme.lines.forEach(line => {
            drawText(line)

        }
        )
        drawRect(gMeme.lines[gMeme.selectedLineIdx])
    }
}


function onInputTxt(text) {
    setLineTxt(text)
    renderMeme()

}

function onInputColor(color) {
    setColor(color)
    renderMeme()

}
function onInputStroke(color) {
    setStoke(color)
    renderMeme()

}

function onFontSize(size) {
    fontSize(size)
    renderMeme()

}
function onMoveLine(num) {
    moveLineMove(num)
    renderMeme()

}
function onMoveRightLeft(num) {
    moveLineRightLeft(num)
    renderMeme()

}

function onChangeLine() {
    changeLines()
    renderMeme()
}

function onDownloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'canvas'
}

function onAddLine() {
    addLine()
    renderMeme()

}

function onDelte() {
    if (gMeme.lines.length === 0) return
    deleteLine()
    renderMeme()

}

function onSetFontFamily(font) {
    setFontFamily(font)
    renderMeme()

}

function onSetAlign(align) {
    setAlign(align)
    renderMeme()
}

function onSaveMeme() {
    saveMeme()

}


function drawImgMeme() {
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
}

function drawText(line) {
    var x = line.posX
    var y = line.posY
    gCtx.lineWidth = 1.2
    gCtx.strokeStyle = line.stroke
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.fillText(line.text, x, y)
    gCtx.strokeText(line.text, x, y)

}


function drawRect(line) {
    var txtWid = gCtx.measureText(line.text).width
    var x = line.posX
    var y = line.posY
    gCtx.beginPath()
    gCtx.rect(x, y + 5, txtWid * 2, -line.size)
    gCtx.strokeStyle = "black"
    gCtx.stroke()
}
