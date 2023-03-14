import React from "react";

function calcularSemanas(cantidad) {
  return Math.floor((cantidad * 365) / 7);
}

function Resultados({ añosRestantes, añosVividos }) {
  const semanasRestantes = [];
  const semanasVividas = [];
  for (let index = 0; index < (añosVividos * 365) / 7; index++) {
    semanasVividas.push(<span className="diasVividos" key={index}></span>);
  }
  for (let index = 0; index < (añosRestantes * 365) / 7; index++) {
    semanasRestantes.push(<span className="diasRestantes" key={index}></span>);
  }

  if (añosRestantes)
    return (
      <div className="resultados">
        <p>Te quedan {calcularSemanas(añosRestantes)} semanas</p>
        <div className="contenedorDias">
          {semanasVividas}
          <div className="nubeVividos">
            {calcularSemanas(añosVividos)} Semanas vividas
          </div>
          {semanasRestantes}
          <div className="nubeRestantes">
            {calcularSemanas(añosRestantes)} Semanas Restantes
          </div>
        </div>
      </div>
    );
  else return null;
}

export default Resultados;
