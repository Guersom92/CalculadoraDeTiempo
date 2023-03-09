import React ,{useState,useRef}from 'react';

function Formulario({setRestante,setVividos,setClase}){
    const edadRef=useRef();
    const esperanzaRef=useRef();

    let [cantidadPosible,cambiarCantidadPosible]=useState(false);
    let [vacio,cambiarVacio]=useState(false);

    function submitFunction(e){ 
        e.preventDefault();
        let esVacio= esperanzaRef.current.value==""||edadRef.current.value=="";
        let esperanzaMenor=edadRef.current.valueAsNumber>=esperanzaRef.current.valueAsNumber;
        if(esVacio){
            cambiarVacio(true);
            setRestante(null);
        }else cambiarVacio(false)
        
        if(esperanzaMenor){
            cambiarCantidadPosible(true);
            setRestante(null);
        }else cambiarCantidadPosible(false);

        if(esVacio||esperanzaMenor)return;
        let añosRestantes=esperanzaRef.current.value-edadRef.current.value;
        setRestante(añosRestantes);
        setVividos(edadRef.current.value);
        edadRef.current.value=null;
        esperanzaRef.current.value=null;
    }

    return(
        <form className="inputs"onSubmit={submitFunction}>
            <input type="number" min="1" max="120" ref={edadRef} placeholder="Ingresa tu edad"/>
            {cantidadPosible?<p className="error">Edad no puede ser menor o igual a la esperanza</p>:null}
            <div className="esperanza-container">
            <input type="number" min="1" max="120" ref={esperanzaRef} placeholder="Esperanza de vida"/> 
            <button type="button" onClick={()=>setClase("show")} className="button-info">i</button>
            </div>
            {vacio?<p className="error">Debes llenar las 2 casillas</p>:null}
            <button>Calcular</button>
        </form>
    )
}


export default Formulario;