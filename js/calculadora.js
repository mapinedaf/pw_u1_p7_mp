var num1 = 0;
var num2 = 0;
var operacion = '';


function setearValor(valor) {

    if (valor === " ") {
        num1 = 0
        num2 = 0
        operacion = ''
    }

    if ("+-*/".includes(valor)) {
        operacion = valor
        num1 = document.getElementById("id-display").innerText
        document.getElementById("id-display").innerText = valor;
    } else {

        document.getElementById("id-display").innerText = valor;
        num2 = valor;
    }

    console.log("num 1: " + num1)
    console.log("num 2: " + num2)
    console.log("operacion : " + operacion)

}

function concatenarValor(valor) {

    display = document.getElementById("id-display")
    if (valor === " ") {
        num1 = 0
        num2 = 0
        operacion = ''
    }
    else {
        if ("*+-/".includes(valor)) {
            operacion = valor;
        }
        valor1 = document.getElementById("id-display");
        valor1.innerText = valor1.innerText + valor;
    }

}

function popText() {
    valor = document.getElementById("id-display").innerText.slice(0, -1);
    document.getElementById("id-display").innerText = valor;
}


function evaluarConcatenado() {

    display = document.getElementById("id-display");


    //existe almenos una operacion
    if (display.innerText.includes("/")
        | display.innerText.includes("*")
        | display.innerText.includes("+")
        | display.innerText.includes("-")) {

        console.log("operacion: " + operacion);
        calculo = 0;
        operandos  = [];
        //Separando los operandos 
        switch (operacion) {
            case "*":
                operandos = display.innerText.split("*");
                calculo = parseInt(operandos[0])*parseInt(operandos[1]);

                break;
            case "/":
                operandos = display.innerText.split("/")
                calculo = parseInt(operandos[0])/parseInt(operandos[1]);
                break;
            case "+":
                operandos = display.innerText.split("+")
                calculo = parseInt(operandos[0])+parseInt(operandos[1]);
                break;
            case "-":
                operandos = display.innerText.split("-")
                calculo = parseInt(operandos[0])-parseInt(operandos[1]);
                break;
        }

        display.innerText = operandos.length ===2? calculo: "error"; 

        console.log(operandos);
        console.log(calculo);

    }



}


function evaluar2() {

    display = document.getElementById("id-display");
    num2 = display.innerText
    newnum = 0
    if (operacion === "+") {
        newnum = parseInt(num1) + parseInt(num2);
        display.innerText = newnum;
    } else if (operacion === "-") {
        newnum = parseInt(num1) - parseInt(num2);
        display.innerText = newnum;
    } else if (operacion === "*") {
        newnum = parseInt(num1) * parseInt(num2);
        display.innerText = newnum;
    } else if (operacion === "/") {
        newnum = parseInt(num1) / parseInt(num2);
        display.innerText = newnum;
    }

    num1 = newnum;

}