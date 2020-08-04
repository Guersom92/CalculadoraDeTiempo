import React ,{useState, useRef}from 'react';

function calcularSueño(cantidad){
    return (cantidad*0.33355403378995).toFixed(2);
}

function calcularAlimentacion(cantidad){
    return (cantidad*0.062541381335616).toFixed(2);
}
function calcularTrabajo(cantidad){
    return (cantidad*0.28590345753425).toFixed(2);
}
function calcularTiempoLibre(cantidad){
   return (cantidad-(cantidad*0.33355403378995)-(cantidad*0.062541381335616)-(cantidad*0.28590345753425)).toFixed(2);
}

function Resultados({añosRestantes}){

    if(añosRestantes)return(
        <div>
            <p>Te quedan {añosRestantes} años</p>
            <p>{calcularSueño(añosRestantes)} años de sueño</p>
            <p>{calcularAlimentacion(añosRestantes)} años de alimentación</p>
            <p>{calcularTrabajo(añosRestantes)} años de trabajo</p>
            <p>Te quedan {calcularTiempoLibre(añosRestantes)} años libres</p>
        </div>
        )
    else return null
    
    }
    
export default Resultados;
