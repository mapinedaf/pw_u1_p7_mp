const cambiarTexto = (idElemento, valor) => {

    document.getElementById(idElemento).innerText = valor;
}

const cambiarColor = (idElemento, valor) => {
    document.getElementById(idElemento).style.color = valor;
}
const cambiarTamano = (idElemento, valor) => {
    document.getElementById(idElemento).style.fontSize = valor;
}
const agregarElemento = (idElemento, valor) => {
    document.getElementById(idElemento).innerHTML = document.getElementById(idElemento).innerHTML + valor;
}

const conceptosJS = () => {

    /*Tipos de variables js
        var: declaraciones globales en desuso
        let: variables locales
        const: valor no cambia 
    */

    let nombre = "marco";
    let numero1 = 10;
    let numero2 = 10.1;
    const PI = 3.14;

    console.log(nombre);
    console.log(numero1);
    console.log(PI);
    console.log("metodo de calculo");

    //declaracion de arreglos 

    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);

    // en js no existencia  se considera undefined 
    console.log(diasSemana[5])


    let valor = null;
    console.log(valor);
    //===
    //!==

    diasSemana.push("Sabado");
    console.log(diasSemana);
    diasSemana.unshift("Dias");
    console.log(diasSemana);



    const numerosImpares = [1,3,4,5,9];
    console.log(numerosImpares)
    const numerosPares= [0,2,4,6,8];
    console.log(numerosPares);
    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);
    
    for(const dia of diasSemana){
        console.log(dia);

        if(dia==="Viernes"){
            console.log("Al fin viernes");
        }else{
            console.log("Aun no llega viernes");
        }
    }

    //manejo de objetos
    const miEstudiante = {
        nombre:"Marco",
        apellido:"Pineda",
        edad:24,
        genero:"Masculino",
        ciudadNacimiento:"Quito"
    }

    console.log(miEstudiante)
    console.log(miEstudiante.nombre)

    if(miEstudiante.edad ===33){
        console.log('Tiene 33');
    }else{
        console.log("no tiene 33");
    }

    const miProfesor = {
        nombre:"Edison",
        apellido:"Cayambe",
        direccion:{
            calle:"Av america",
            casa:"120",
            barrio:"Rumipamba"
        }
    }
    miProfesor.direccion.calle="10 de agosto"

    console.log(miProfesor)
    
}