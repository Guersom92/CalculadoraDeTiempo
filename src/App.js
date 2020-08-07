import React ,{useState}from 'react';
import Formulario from './Formulario';
import Resultados from './Resultados';

function App() {
  const [añosRestantes,setData]=useState();
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
        <div >
          <Formulario setData={setData} setClase={setClase}/>
          <Resultados añosRestantes={añosRestantes}/>
        </div>
        <div className="disclaimer">
        Disclaimer<br/>
        La app asume que todos los años tienen 365 días, trabajas 48 h a la semana y comes en 30 minutos.
        </div>
        
      </div>
      <div className={`contenedor-info ${clase}`} onClick={quitarClases}>
          <div className={`info ${clase}`}>
            La UN dice...
          </div>
      </div>
    </>
  );
}

export default App;
