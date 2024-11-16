function cambiarTexto(idElemento, valor) {

    document.getElementById(idElemento).innerText = valor;
}

function cambiarColor(idElemento, valor){
    document.getElementById(idElemento).style.color=valor;
}
function cambiarTamano(idElemento, valor){
    document.getElementById(idElemento  ).style.fontSize =valor;
}
function agregarElemento(idElemento, valor){
    document.getElementById(idElemento).innerHTML = document.getElementById(idElemento).innerHTML + valor; 
}
