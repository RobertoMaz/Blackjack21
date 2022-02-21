import {cartas} from "./cartas.js";

/* PASAR EL ESTADO A TRUE
cartas[0].usado = true ;
console.log(cartas[0].usado);
*/

let miDinero = 500;

let carta1 = Math.round(Math.random()*cartas.length);
let carta2 = Math.round(Math.random()*cartas.length);


console.log(carta1, carta2);

let resultado = cartas[carta1].valor + cartas[carta2].valor;
console.log(resultado);




if(carta1){
        let cartanum1 = cartas[carta1].valor;
        let palonum1 = cartas[carta1].palo;
        //cartas.splice(carta1, 1);
        document.getElementById("carta1").setAttribute("src", "cartas/" + cartanum1  + palonum1 + ".jpg");  
}


if(carta2){
    let cartanum2 = cartas[carta2].valor;
    let palonum2 = cartas[carta2].palo;
    //cartas.splice(carta2, 1);
    document.getElementById("carta2").setAttribute("src", "cartas/" + cartanum2 + palonum2 + ".jpg");
}


let button = document.getElementById("button");

button.addEventListener("click", ()=>{
    let carta3 = Math.round(Math.random()*cartas.length);
    if(carta3){
        let cartanum3 = cartas[carta3].valor;
        let palonum3 = cartas[carta3].palo;
        cartas.splice(carta1, 1);
        document.getElementById("carta3").setAttribute("src", "cartas/" + cartanum3  + palonum3 + ".jpg");  
    }
});

button.addEventListener("click", ()=>{
    let carta4 = Math.round(Math.random()*cartas.length);
    if(carta4){
        let cartanum4 = cartas[carta4].valor;
        let palonum4 = cartas[carta4].palo;
        cartas.splice(carta2, 1);
        document.getElementById("carta4").setAttribute("src", "cartas/" + cartanum4 + palonum4 + ".jpg");
    }
})


/*
let carta3 = Math.round(Math.random()*cartas.length);
let resultado2 = resultado + cartas[carta3].valor;

//console.log(resultado2);

if(carta3){
    let cartanum3 = cartas[carta3].valor;
    let palonum3 = cartas[carta3].palo;
    cartas.splice(carta1, 1);
    document.getElementById("carta3").setAttribute("src", "cartas/" + cartanum3  + palonum3 + ".jpg");  
}


let carta4 = Math.round(Math.random()*cartas.length);
let resultado3 = resultado2 + cartas[carta4].valor;

console.log(resultado3);

if(carta4){
    let cartanum4 = cartas[carta4].valor;
    let palonum4 = cartas[carta4].palo;
    cartas.splice(carta2, 1);
    document.getElementById("carta4").setAttribute("src", "cartas/" + cartanum4 + palonum4 + ".jpg");
}


*/
