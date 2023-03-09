import React ,{useState}from 'react';
import Formulario from './Formulario';
import Resultados from './Resultados';

function App() {
  const [añosVividos,setVividos]=useState();
  const [añosRestantes,setRestante]=useState();
  const[clase,setClase]=useState("");

  function quitarClases(e){
    if(e.target.classList.contains('contenedor-info')){
      setClase("");
    }
  }
  return (
    <>
      <div className="contenedor">
        <h1>¿Cuánto tiempo tienes?</h1>
          <Formulario setRestante={setRestante} setClase={setClase} setVividos={setVividos}/>
          <Resultados añosRestantes={añosRestantes} añosVividos={añosVividos}/>
        <div className="disclaimer">
        Disclaimer<br/>
        La app asume que todos los años tienen 365 días
        </div>
        
      </div>
      <div className={`contenedor-info ${clase}`} onClick={quitarClases}>
          <div className={`info ${clase}`}>
          <p>Segun la OMS la esperanza de vida mundial al nacer en 2016 era de 72 años(74,2 años para mujeres y 69,8 años para hombres).</p>
          <p>En Perú la expectativa era de 67.47(69,1 años para mujeres y 65,7 años para hombres).</p>
          </div>
      </div>
    </>
  );
}

export default App;
