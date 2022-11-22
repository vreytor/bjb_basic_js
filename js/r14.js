const resultado = document.getElementById("resultado");
const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.onclick = function(){
let num1 = 20;
let num2 = 30; 
let num3 = 12;
let num4 = 21;

let op1 = num1 + num2;
let op2 = num4 - num3;
let opfinal = op1 * op2;

resultado.innerText =`El resultado es : ${opfinal}`;
}