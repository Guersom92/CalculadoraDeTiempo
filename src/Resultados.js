import React from "react";

function calcularSemanas(cantidad) {
  return (Math.floor((cantidad * 365) / 7));
}

function Resultados({ añosRestantes, añosVividos }) {
  const semanasRestantes = [];
  const semanasVividas = [];
  for (let index = 0; index < (añosVividos * 365) / 7; index++) {
    semanasVividas.push(<span class="dot"></span>);
  }
  for (let index = 0; index < (añosRestantes * 365) / 7; index++) {
    semanasRestantes.push(<span class="dot"></span>);
  }

  if (añosRestantes)
    return (
      <div className="resultados">
        <p>Te quedan {calcularSemanas(añosRestantes)} semanas</p>
        <div className="diasVividos"> <div className="nubeVividos">{calcularSemanas(añosVividos)} Semanas vividas</div> {semanasVividas}</div>
        <div className="diasRestantes"> <div className="nubeRestantes">{calcularSemanas(añosRestantes)} Semanas Restantes</div> {semanasRestantes}</div>
      </div>
    );
  else return null;
}

export default Resultados;
