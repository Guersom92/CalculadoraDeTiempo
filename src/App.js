import React ,{useState}from 'react';
import Formulario from './Formulario';
import Resultados from './Resultados';

function App() {
  const [añosRestantes,setData]=useState();
  return (
    <div className="contenedor">
      <h1>¿Cuánto tiempo tienes?</h1>
      <div >
        <Formulario setData={setData} />
        <Resultados añosRestantes={añosRestantes}/>
      </div>
      <div className="disclaimer">
      Disclaimer<br/>
      La app asume que todos los años tienen 365 días 5 horas y 48 min, que uno trabaja 48 h a la semana y que se demora en comer 30 minutos.
      </div>
    </div>
  );
}

export default App;
