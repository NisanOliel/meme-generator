'use strict'

function renderMeme() {
    console.log('boya');
    var meme = getMeme()
    var img = new Image()
    img.src = `img/${meme.selecterId}.jpg`
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        gCtx.font = '20px Impact'
        meme.lines.forEach(line =>
            gCtx.fillText(line.txt, 40, 60)
        )
    }
}



function onInputTxt(txt) {
    setLineTxt(txt)
    renderMeme()
}



// function drawImgMeme() {
//     gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
// }

// function drawText(text, x, y) {
//     gCtx.lineWidth = 2
//     gCtx.strokeStyle = 'white'
//     gCtx.fillStyle = 'black'
//     gCtx.font = '40px Arial'
//     gCtx.fillText(text, x, y)
//     gCtx.strokeText(text, x, y)
// }

