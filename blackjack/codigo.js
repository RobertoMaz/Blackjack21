import {cartas} from "./cartas.js";

let miDinero = 500;




let button = document.getElementById("button");
let contador = 0;
let cartanumero1;
let cartanumero2;
let cartanumero3;
let cartanumero4;
let resultado;

function darCarta(){
    let carta1 = Math.round(Math.random()*cartas.length);
    let carta2 = Math.round(Math.random()*cartas.length);
    

    cartanumero1 = cartas[carta1].valor;
    
    if(cartanumero1 > 10 && cartanumero1 <= 13){
        cartanumero1 = 10;
    }
    if(cartanumero1 === 0){
        cartanumero1 = 1;
    }
    
    if(cartas[carta1].valor === 0){
                let cartanum1 = 1;
                let palonum1 = cartas[carta1].palo;
                document.getElementById("carta1").setAttribute("src", `cartas/${cartanum1}${palonum1}.jpg`);  
                cartas.splice(carta1, 1);
    }else{
                let cartanum1 = cartas[carta1].valor;
                let palonum1 = cartas[carta1].palo;
                document.getElementById("carta1").setAttribute("src", `cartas/${cartanum1}${palonum1}.jpg`);  
                cartas.splice(carta1, 1);
    }
    
    cartanumero2 = cartas[carta2].valor;
    
    if(cartanumero2 > 10 && cartanumero2 <= 13){
        cartanumero2 = 10;
    }
    if(cartanumero2 === 0){
        cartanumero2 = 1;
    }
    
    
    if(cartas[carta2].valor === 0){
        let cartanum2 = 1;
        let palonum2 = cartas[carta2].palo;
        document.getElementById("carta2").setAttribute("src", `cartas/${cartanum2}${palonum2}.jpg`);  
        cartas.splice(carta2, 1);
    }else{
        let cartanum2 = cartas[carta2].valor;
        let palonum2 = cartas[carta2].palo;
        document.getElementById("carta2").setAttribute("src", `cartas/${cartanum2}${palonum2}.jpg`);
        cartas.splice(carta2, 1);
    }
    
    resultado = cartanumero1 + cartanumero2;
    console.log(resultado);
    
}
function darCarta3(){
    if(contador === 0){
            let carta3 = Math.round(Math.random()*cartas.length);
            cartanumero3 = cartas[carta3].valor;
            if(cartanumero3 > 10 && cartanumero3 <= 13){
                cartanumero3 = 10;
            }
            if(cartanumero3 === 0){
                cartanumero3 = 1;
            }
            resultado = resultado + cartanumero3;
            console.log(resultado);
            

            if(cartas[carta3].valor === 0){
                let cartanum3 = 1;
                let palonum3 = cartas[carta3].palo;
                document.getElementById("carta3").setAttribute("src", `cartas/${cartanum3}${palonum3}.jpg`);  
                cartas.splice(carta3, 1);
                           
            }else{
                let cartanum3 = cartas[carta3].valor;
                let palonum3 = cartas[carta3].palo;
                document.getElementById("carta3").setAttribute("src", `cartas/${cartanum3}${palonum3}.jpg`); 
                cartas.splice(carta3, 1);     
            }

            if(resultado > 21){
                console.log(`Tus cartas suman ${resultado} perdiste!`);
                contador = 1;
            } else {
                console.log(`Tus cartas suman ${resultado} puedes pedir otra carta o plantarte.`);
                contador = 2;
            }
            
    } else if(contador === 2) {
        let carta4 = Math.round(Math.random()*cartas.length);
        cartanumero4 = cartas[carta4].valor;
            if(cartanumero4 > 10 && cartanumero4 <= 13){
                cartanumero4 = 10;
            }
            if(cartanumero4 === 0){
                cartanumero4 = 1;
            }
            resultado = resultado + cartanumero4;
            console.log(resultado);
        if(carta4.valor === 0){
            let cartanum4 = 1;
            let palonum4 = cartas[carta4].palo;
            document.getElementById("carta4").setAttribute("src", `cartas/${cartanum4}${palonum4}.jpg`);  
            cartas.splice(carta4, 1);
        }else{
            let cartanum4 = cartas[carta4].valor;
            let palonum4 = cartas[carta4].palo;
            document.getElementById("carta4").setAttribute("src", `cartas/${cartanum4}${palonum4}.jpg`);
            cartas.splice(carta4, 1);
        }

        if(resultado > 21){
            console.log(`Tus cartas suman ${resultado} perdiste!`);
            contador = 3;
        } else {
            console.log(`Tus cartas suman ${resultado}.`);
            contador = 3;
        }
    }
}


darCarta();
if(resultado < 21){
    console.log(`tus cartas suman ${resultado} puedes pedir otra carta o plantarte.`);
    button.addEventListener("click", darCarta3); 
}






