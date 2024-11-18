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



    const numerosImpares = [1, 3, 4, 5, 9];
    console.log(numerosImpares)
    const numerosPares = [0, 2, 4, 6, 8];
    console.log(numerosPares);
    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for (const dia of diasSemana) {
        console.log(dia);

        if (dia === "Viernes") {
            console.log("Al fin viernes");
        } else {
            console.log("Aun no llega viernes");
        }
    }

    //manejo de objetos
    const miEstudiante = {
        nombre: "Marco",
        apellido: "Pineda",
        edad: 24,
        genero: "Masculino",
        ciudadNacimiento: "Quito"
    }

    console.log(miEstudiante)
    console.log(miEstudiante.nombre)

    if (miEstudiante.edad === 33) {
        console.log('Tiene 33');
    } else {
        console.log("no tiene 33");
    }

    const miProfesor = {
        nombre: "Edison",
        apellido: "Cayambe",
        direccion: {
            calle: "Av america",
            casa: "120",
            barrio: "Rumipamba"
        }
    }
    miProfesor.direccion.calle = "10 de agosto"

    console.log(miProfesor)



    //arreglo de objetos 
    const est1 = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35
    }

    const est2 = {
        nombre: "David",
        apellido: "Teran",
        edad: 35
    }
    const est3 = {
        nombre: "Viviana",
        apellido: "Castillo",
        edad: 35

    }

    const arregloEstudiantes = [est1, est2, est3];
    console.log(arregloEstudiantes);
    console.log(arregloEstudiantes[1]);
    console.log(arregloEstudiantes[1].nombre);

    const arregloEstudiantes2 = [
        { nombre: "Carlos", apellido: "Tobar", edad: 35 },
        { nombre: "Anita", apellido: "Teran", edad: 32 }
    ]

    console.table(arregloEstudiantes2);
    const estudiante = arregloEstudiantes2.pop()
    console.log(estudiante)
    console.table(arregloEstudiantes2)

    //desestructuracion de arreglos

    const colores = ["Amarillo","Azul","Verde","Rojo","Rosado"];

    const [p1,p2,p3,p4,p5] = colores;
    console.log(p1);
    console.log(p3);

    const [m1,m2,m3,m4,m5,m6,m7] = ["enero","febrero","marzo","abril","mayo"];

    console.log(m1)
    console.log(m2)
    console.log(m7)

    //desestructuracion de objetos 
    console.log("desestructuracion de objetos")
    const automobil={
        marca:"Toyota",
        modelo:"Prius",
        year:2024,
        color:"plateado"
    }

    const {marca,modelo,year,color} = automobil;
    /*
    console.log(marca);
    console.log(modelo);
    console.log(year);
    console.log(color);*/

    desestructuracion(automobil);


    //declarar un objeto con atrributo complejo y desestructurar el objeto tipo objeto

    const universidad  = {
        nombre:"Uce",
        estudiantes: 100000,
        rector:{
            nombreR:"Nombre1",
            apellido:"Apellido1"
        }
    }



    //2 pasos
    //const{nombreU ,estudiantes,rector} = universidad
    //const{nombreR} = rector
    //console.log(nombreR);

    const{nombreu,estudiantes,rector:{nombreR,apellido}} = universidad;

    console.log(nombreR);
    console.log(apellido);

}

const desestructuracion =({marca,modelo,year,color}) =>{
    console.log("Entro a desestructuracion")
    console.log(marca);
    console.log(modelo);
    console.log(year);
    console.log(color);
}