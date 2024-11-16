function concatenarTextos(texto1, texto2, elemSalida) {
    document
        .getElementById(elemSalida)
        .innerText = document.getElementById(texto1).value + document.getElementById(texto2).value;
}

function setFuente(elemSalida, fuente) {
    document.getElementById(elemSalida).style.fontFamily = fuente
}

function setFontSize(elemSalida, size) {
    document.getElementById(elemSalida).style.fontSize = size;
}

function setTextAlign(elemSalida, align) {
    document.getElementById(elemSalida).style.textAlign = align
}

function setFontStyle(elemSalida, style) {
    document.getElementById(elemSalida).style.fontStyle = style
}
function setFontWeight(elemSalida, weight) {
    document.getElementById(elemSalida).style.fontWeight = weight
}