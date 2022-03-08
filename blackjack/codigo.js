import {cartas} from "./cartas.js";

let miDinero = 500;
let apuesta = 10;
let contadorcomenzar = 0;
let contador = 0;
let contadorCrupier = 0;
let contadorVJ = 0;
let contadorapuesta = 0;
let cartanumero1;
let cartanumero2;
let cartanumero3;
let cartanumero4;
let cartanumero5;
let resultadoCrupier;
let resultado;

let btncomenzar = document.getElementById("comenzar");
let pedir = document.getElementById("btnpedir");
let plantar = document.getElementById("plantar");
let volverAJugar = document.getElementById("volverajugar");
let btnapuestasumar = document.getElementById("sumar10");
let btnapuestarestar = document.getElementById("restar10");

volverAJugar.disabled = true;
pedir.disabled = true;
plantar.disabled = true;

// Da comienzo a la ejecucion del codigo.
function comenzar(){
    if(contadorcomenzar === 0){
        darCarta();
        contadorcomenzar = 1;
        btncomenzar.disabled = true;
        pedir.disabled = false;
        plantar.disabled = false;

        if(resultado < 21){
            pedir.addEventListener("click", darCarta3); 
        }
    }
}
function sumar10(){
    if(contadorapuesta === 0 && apuesta < miDinero){
        apuesta += 10;
        document.getElementById("apuestamensaje").innerHTML = `Apuesta $${apuesta}`;
    }   
}

function restar10(){
    if(contadorapuesta === 0 && apuesta > 10){
        apuesta -= 10;
        document.getElementById("apuestamensaje").innerHTML = `Apuesta $${apuesta}`;
    }
}

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
 
    document.getElementById("div1").innerHTML = '<img src="#" id="carta1">';

    if(cartas[carta1].valor === 0){
        let cartanum1 = 1;
        let palonum1 = cartas[carta1].palo;
        document.getElementById("carta1").setAttribute("src", `cartas/${cartanum1}${palonum1}.jpg`);  
    }else{
        let cartanum1 = cartas[carta1].valor;
        let palonum1 = cartas[carta1].palo;
        document.getElementById("carta1").setAttribute("src", `cartas/${cartanum1}${palonum1}.jpg`);  
    }
    
    cartanumero2 = cartas[carta2].valor;
    
    document.getElementById("div2").innerHTML = '<img src="#" id="carta2">';

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
    }else{
        let cartanum2 = cartas[carta2].valor;
        let palonum2 = cartas[carta2].palo;
        document.getElementById("carta2").setAttribute("src", `cartas/${cartanum2}${palonum2}.jpg`);
    }
        
    resultado = cartanumero1 + cartanumero2;

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

        document.getElementById("div3").innerHTML = '<img src="#" id="carta3">';
                    
        if(cartas[carta3].valor === 0){
            let cartanum3 = 1;
            let palonum3 = cartas[carta3].palo;
            document.getElementById("carta3").setAttribute("src", `cartas/${cartanum3}${palonum3}.jpg`);                     
        }else{
            let cartanum3 = cartas[carta3].valor;
            let palonum3 = cartas[carta3].palo;
            document.getElementById("carta3").setAttribute("src", `cartas/${cartanum3}${palonum3}.jpg`);     
        }

        if(resultado <= 21){
            // CAMBIAR EL CONTADOR PARA PEDIR OTRA CARTA
            contador = 2;
        } else {
            volverAJugar.disabled = false;
            plantar.disabled = true;
            pedir.disabled = true;
            contador = 1;
            contadorVJ = 0;
            miDinero -= apuesta;
            document.getElementById("resultadomensaje").innerHTML = `Perdiste!! vuelve a jugar.`;
            document.getElementById("dinero").innerHTML = `$${miDinero}`;
        }

        if(resultado > 21){
            contador = 100;
            contadorCrupier = 100;
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

        document.getElementById("div4").innerHTML = '<img src="#" id="carta4">';
    
        if(carta4.valor === 0){
            let cartanum4 = 1;
            let palonum4 = cartas[carta4].palo;
            document.getElementById("carta4").setAttribute("src", `cartas/${cartanum4}${palonum4}.jpg`);  
        }else{
            let cartanum4 = cartas[carta4].valor;
            let palonum4 = cartas[carta4].palo;
            document.getElementById("carta4").setAttribute("src", `cartas/${cartanum4}${palonum4}.jpg`);
        }
        
        if(resultado <= 21){
            contador = 3; 
        } else {
            volverAJugar.disabled = false;
            plantar.disabled = true;
            pedir.disabled = true;
            contador = 50;
            contadorVJ = 0;
            miDinero -= apuesta;
            document.getElementById("resultadomensaje").innerHTML = `Perdiste!! vuelve a jugar.`;
            document.getElementById("dinero").innerHTML = `$${miDinero}`;
        }

        if(resultado > 21){
            contador = 100;
            contadorCrupier = 100;
        }        
    } else if(contador === 3) {
        let carta5 = Math.round(Math.random()*cartas.length);

        cartanumero5 = cartas[carta5].valor;

        if(cartanumero5 > 10 && cartanumero5 <= 13){
            cartanumero5 = 10;
        }

        if(cartanumero5 === 0){
            cartanumero5 = 1;
        }

        resultado = resultado + cartanumero5;

        document.getElementById("div5").innerHTML = '<img src="#" id="carta5">';

        if(carta5.valor === 0){
            let cartanum5 = 1;
            let palonum5 = cartas[carta5].palo;
            document.getElementById("carta5").setAttribute("src", `cartas/${cartanum5}${palonum5}.jpg`);  
        }else{
            let cartanum5 = cartas[carta5].valor;
            let palonum5 = cartas[carta5].palo;
            document.getElementById("carta5").setAttribute("src", `cartas/${cartanum5}${palonum5}.jpg`);
        }
        
        if(resultado <= 21){
            contador = 4; 
        } else {
            volverAJugar.disabled = false;
            plantar.disabled = true;
            pedir.disabled = true;
            contador = 50;
            contadorVJ = 0;
            miDinero -= apuesta;
            document.getElementById("resultadomensaje").innerHTML = `Perdiste!! vuelve a jugar.`;
            document.getElementById("dinero").innerHTML = `$${miDinero}`;
        }
    
        if(resultado > 21){
            contador = 100;
            contadorCrupier = 100;
        }
    }
    
}

function cartaCrupier(){
    volverAJugar.disabled = false;
    plantar.disabled = true;
    pedir.disabled = true;

    contadorapuesta = 100;
    
    if(contadorCrupier === 0){
        contadorVJ = 0;
        let cartaCrupier1 = Math.round(Math.random()*cartas.length);
        let cartaCrupier2 = Math.round(Math.random()*cartas.length);
        let cartaCrupierValor1 = cartas[cartaCrupier1].valor;
        let cartaCrupierValor2 = cartas[cartaCrupier2].valor;     

        if(cartaCrupierValor1 > 10 && cartaCrupierValor1 <= 13){
            cartaCrupierValor1 = 10;
        }

        if(cartaCrupierValor1 === 0){
            cartaCrupierValor1 = 1;
        }

        if(cartas[cartaCrupier1].valor === 0){
            let cartanum1 = 1;
            let palonum1 = cartas[cartaCrupier1].palo;
            document.getElementById("ccrupier1").innerHTML = '<img src="#" id="cartacrup1">';
            document.getElementById("cartacrup1").setAttribute("src", `cartas/${cartanum1}${palonum1}.jpg`);  
        }else{
            let cartanum1 = cartas[cartaCrupier1].valor;
            let palonum1 = cartas[cartaCrupier1].palo;
            document.getElementById("ccrupier1").innerHTML = '<img src="#" id="cartacrup1">';
            document.getElementById("cartacrup1").setAttribute("src", `cartas/${cartanum1}${palonum1}.jpg`);
        }

        if(cartaCrupierValor2 > 10 && cartaCrupierValor2 <= 13){
            cartaCrupierValor2 = 10;
        }

        if(cartaCrupierValor2 === 0){
            cartaCrupierValor2 = 1;
        }

        if(cartas[cartaCrupier2].valor === 0){
            let cartanum2 = 1;
            let palonum2 = cartas[cartaCrupier2].palo;
            document.getElementById("ccrupier2").innerHTML = '<img src="#" id="cartacrup2">';
            document.getElementById("cartacrup2").setAttribute("src", `cartas/${cartanum2}${palonum2}.jpg`);  
        }else{
            let cartanum2 = cartas[cartaCrupier2].valor;
            let palonum2 = cartas[cartaCrupier2].palo;
            document.getElementById("ccrupier2").innerHTML = '<img src="#" id="cartacrup2">';
            document.getElementById("cartacrup2").setAttribute("src", `cartas/${cartanum2}${palonum2}.jpg`);
        }

        resultadoCrupier = cartaCrupierValor1 + cartaCrupierValor2;

        if(resultadoCrupier < 17 && resultadoCrupier < resultado){
            let cartaCrupier3 = Math.round(Math.random()*cartas.length);
            let cartaCrupierValor3 = cartas[cartaCrupier3].valor;

            if(cartaCrupierValor3 > 10 && cartaCrupierValor3 <= 13){
                cartaCrupierValor3 = 10;
            }

            if(cartaCrupierValor3 === 0){
                cartaCrupierValor3 = 1;
            }

            if(cartas[cartaCrupier3].valor === 0){
                let cartanum2 = 1;
                let palonum2 = cartas[cartaCrupier3].palo;
                document.getElementById("ccrupier3").innerHTML = '<img src="#" id="cartacrup3">';
                document.getElementById("cartacrup3").setAttribute("src", `cartas/${cartanum2}${palonum2}.jpg`);  
            }else{
                let cartanum2 = cartas[cartaCrupier3].valor;
                let palonum2 = cartas[cartaCrupier3].palo;
                document.getElementById("ccrupier3").innerHTML = '<img src="#" id="cartacrup3">';
                document.getElementById("cartacrup3").setAttribute("src", `cartas/${cartanum2}${palonum2}.jpg`);
            }

            resultadoCrupier = resultadoCrupier + cartaCrupierValor3;  

            if(resultadoCrupier < 17 && resultadoCrupier < resultado){
                let cartaCrupier4 = Math.round(Math.random()*cartas.length);
                let cartaCrupierValor4 = cartas[cartaCrupier4].valor;

                if(cartaCrupierValor4 > 10 && cartaCrupierValor4 <= 13){
                    cartaCrupierValor4 = 10;
                }

                if(cartaCrupierValor4 === 0){
                    cartaCrupierValor4 = 1;
                }

                if(cartas[cartaCrupier4].valor === 0){
                    let cartanum2 = 1;
                    let palonum2 = cartas[cartaCrupier4].palo;
                    document.getElementById("ccrupier4").innerHTML = '<img src="#" id="cartacrup4">';     
                    document.getElementById("cartacrup4").setAttribute("src", `cartas/${cartanum2}${palonum2}.jpg`);  
                }else{
                    let cartanum2 = cartas[cartaCrupier4].valor;
                    let palonum2 = cartas[cartaCrupier4].palo;
                    document.getElementById("ccrupier4").innerHTML = '<img src="#" id="cartacrup4">';
                    document.getElementById("cartacrup4").setAttribute("src", `cartas/${cartanum2}${palonum2}.jpg`);
                }

                resultadoCrupier = resultadoCrupier + cartaCrupierValor4;

                if(resultadoCrupier < 17 && resultadoCrupier < resultado){
                    let cartaCrupier5 = Math.round(Math.random()*cartas.length);
                    let cartaCrupierValor5 = cartas[cartaCrupier5].valor;                    

                    if(cartaCrupierValor5 > 10 && cartaCrupierValor5 <= 13){
                        cartaCrupierValor5 = 10;
                    }

                    if(cartaCrupierValor5 === 0){
                        cartaCrupierValor5 = 1;
                    }

                    if(cartas[cartaCrupier5].valor === 0){
                        let cartanum5 = 1;
                        let palonum5 = cartas[cartaCrupier5].palo;
                        document.getElementById("ccrupier5").innerHTML = '<img src="#" id="cartacrup5">';
                        document.getElementById("cartacrup5").setAttribute("src", `cartas/${cartanum5}${palonum5}.jpg`);  
                    }else{
                        let cartanum5 = cartas[cartaCrupier5].valor;
                        let palonum5 = cartas[cartaCrupier5].palo;
                        document.getElementById("ccrupier5").innerHTML = '<img src="#" id="cartacrup5">';
                        document.getElementById("cartacrup5").setAttribute("src", `cartas/${cartanum5}${palonum5}.jpg`);
                    }

                    resultadoCrupier = resultadoCrupier + cartaCrupierValor5;
                }
            } 
        }

        if (resultadoCrupier <= 21){
            if(resultadoCrupier >= resultado){ 
                miDinero -= apuesta;
                document.getElementById("resultadomensaje").innerHTML = `Gana el Crupier!! vuelve a jugar.`;
                document.getElementById("dinero").innerHTML = `$${miDinero}`;
            } else {
                miDinero += apuesta;
                document.getElementById("resultadomensaje").innerHTML = `Gana el Jugador!! vuelve a jugar.`;
                document.getElementById("dinero").innerHTML = `$${miDinero}`;
            }
        } else {
            miDinero += apuesta;
            document.getElementById("resultadomensaje").innerHTML = `Gana el Jugador!! vuelve a jugar.`;
            document.getElementById("dinero").innerHTML = `$${miDinero}`;
        }
    }
    contadorCrupier = 100;
    contador = 100;
}

function volverJugar() {
    

    if(contadorVJ === 0 && miDinero > 0){
        plantar.disabled = false;
        pedir.disabled = false;
        volverAJugar.disabled = true;
        contadorapuesta = 0;
        resultado = 0;
        resultadoCrupier = 0;
        contador = 0;
        contadorCrupier = 0;
        apuesta = 10;
        contadorVJ = 1;

        document.getElementById("apuestamensaje").innerHTML = `Apuesta $${apuesta}`;
        document.getElementById("dinero").innerHTML = `$${miDinero}`;
        document.getElementById("resultadomensaje").innerHTML = ``;
        document.getElementById("div1").innerHTML = '<img src="#" id="carta1">';
        document.getElementById("div2").innerHTML = '<img src="#" id="carta2">';
        document.getElementById("div3").innerHTML = "";
        document.getElementById("div4").innerHTML = "";
        document.getElementById("div5").innerHTML = "";
        document.getElementById("ccrupier1").innerHTML = "";
        document.getElementById("ccrupier2").innerHTML = "";
        document.getElementById("ccrupier3").innerHTML = "";
        document.getElementById("ccrupier4").innerHTML = "";
        document.getElementById("ccrupier5").innerHTML = "";

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
        }else{
            let cartanum1 = cartas[carta1].valor;
            let palonum1 = cartas[carta1].palo;
            document.getElementById("carta1").setAttribute("src", `cartas/${cartanum1}${palonum1}.jpg`);  
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
        }else{
            let cartanum2 = cartas[carta2].valor;
            let palonum2 = cartas[carta2].palo;
            document.getElementById("carta2").setAttribute("src", `cartas/${cartanum2}${palonum2}.jpg`);
        }
            
        resultado = cartanumero1 + cartanumero2;
    } else {
       alert(document.getElementById("resultadomensaje").innerHTML = `Ya no tienens Dinero.`);
    }
}

btncomenzar.addEventListener("click", comenzar);
plantar.addEventListener("click", cartaCrupier);
volverAJugar.addEventListener("click", volverJugar);
btnapuestasumar.addEventListener("click", sumar10);
btnapuestarestar.addEventListener("click", restar10);
pedir.addEventListener("click", darCarta3); 



