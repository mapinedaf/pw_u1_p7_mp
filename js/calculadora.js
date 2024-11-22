var num1 = 0;
var num2 = 0; 
var operacion = ''; 


function setearValor (valor){

    if(valor ===" "){
        num1 =0
        num2 =0
        operacion=''
    }
    
    if( "+-*/".includes(valor)){
        operacion= valor
        num1 = num2
        document.getElementById("id-display").innerText = valor;
    }else{
       
        document.getElementById("id-display").innerText = valor;
        num2 = valor;
    }

    console.log("num 1: " +num1)
    console.log("num 2: "+num2)
    console.log("operacion : "+operacion)

}

function concatenarValor(valor){
    valor1 =  document.getElementById("id-display");
    valor1.innerText= valor1.innerText + valor;
}

function popText(){
    valor = document.getElementById("id-display").innerText.slice(0,-1);
    document.getElementById("id-display").innerText = valor;
}

function evaluar(){

    operacion = document.getElementById("id-display").innerText;
    valorfinal =''
    if(operacion.includes("/")){
        const partes = operacion.split("/")
        valorfinal = operacion[0] / operacion[1]
        console.log(partes)
    }else if(operacion.includes("+")){


    }else if(operacion.includes("-")){

    }else if(operacion.includes("*")){}


    document.getElementById("id-display").innerText = valorfinal
}

function evaluar2(){

        display = document.getElementById("id-display");

        newnum = 0
    if(operacion ==="+"){
        newnum =  parseInt(num1) + parseInt(num2);
        display.innerText = newnum;
    }else if(operacion ==="-"){
        newnum =  parseInt(num1) - parseInt(num2);
        display.innerText = newnum;
    }else if(operacion ==="*"){
        newnum =  parseInt(num1) * parseInt(num2);
        display.innerText = newnum;
    }else if(operacion ==="/"){
        newnum =  parseInt(num1) / parseInt(num2);
        display.innerText = newnum;
    }

    num1 = newnum;

}