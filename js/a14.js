
/* Ejercicio 01 */
const porcV = document.getElementById("porcV");
const porcM = document.getElementById("porcM");
const btnEnviar1 = document.getElementById("btnEj1");

btnEnviar1.onclick = function(){
    let varones = 27;
    let mujeres = 32;
    let porcVaron = varones / (varones + mujeres) * 100;
    let porcMujer = mujeres / (varones + mujeres) * 100;


    porcV.innerText = porcVaron.toFixed(2) + "%";
    porcM.innerText = porcMujer.toFixed(2) + "%";

   
}

/* Ejercicio 02 */
const importeLM = document.getElementById("importeLM");
const importeAb = document.getElementById("importeAb");
const importe28J = document.getElementById("importe28J");
const importeAv = document.getElementById("importeAv");
const importeT = document.getElementById("importeT");

const btnEnviar2 = document.getElementById("btnEj2");

btnEnviar2.onclick = function(){
    let monto = 700000;
    let avLaMar = monto * 0.35;
    let avAbanc = monto * 0.25;
    let av28Jul = monto * 0.10;
    let avAviac = monto * 0.15;
    let avTanca = monto - avLaMar - avAbanc - av28Jul - avAviac;
    
    importeLM.innerText = "S/ " + avLaMar.toFixed(2);
    importeAb.innerText = "S/ " + avAbanc.toFixed(2);
    importe28J.innerText = "S/ " + av28Jul.toFixed(2);
    importeAv.innerText = "S/ " + avAviac.toFixed(2);
    importeT.innerText = "S/ " + avTanca.toFixed(2);
   
}

/* Ejercicio 03 */

const importeG = document.getElementById("importeG");
const importeMa = document.getElementById("importeMa");
const importeMe = document.getElementById("importeMe");
const importeTo = document.getElementById("importeTo");

const btnEnviar3 = document.getElementById("btnEj3")

btnEnviar3.onclick = function(){
    let valor = 30;
    let general = valor * 150;
    let mayores = valor * 50;
    let menores = valor * 80;
    total = (valor * 150) + (valor * 50) + (valor * 80);

    importeG.innerText = "S/ " + general.toFixed(2);
    importeMa.innerText = "S/ " + mayores.toFixed(2);
    importeMe.innerText = "S/ " + menores.toFixed(2);
    importeTo.innerText = "S/ " + total.toFixed(2);
}