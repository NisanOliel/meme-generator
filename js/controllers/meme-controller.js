'use strict'

function renderMeme() {
    console.log('RenderMeME');
    var meme = getMeme()
    var img = new Image()
    img.src = `img/${meme.selecterId}.jpg`
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        meme.lines.forEach(line => {
            drawText(line)

        }
        )
    }
}



function onInputTxt(text) {
    setLineTxt(text)
    renderMeme()
}

function onInputColor(color) {
    inputColor(color)
    renderMeme()

}

function onFontSize(size) {
    fontSize(size)
    renderMeme()

}

function onChangeLine() {
    changeLines()
    renderMeme()
}

function onSaveCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'canvas'
}


function drawImgMeme() {
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
}

function drawText(line) {
    gCtx.lineWidth = 6
    gCtx.strokeStyle = 'white'
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px Impact`
    gCtx.fillText(line.text, 50, 50)
    // gCtx.strokeText(line.text, 50, 50)
}

