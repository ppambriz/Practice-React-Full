import { useState } from "react";

export const TestUsseState = () => {

    let variableLocal = 0;

    const [estado, setEstado] = useState(0);

    const incrementarAmbos = () => {
        variableLocal = variableLocal + 1;
        setEstado(estado + 1);

        console.log("Dentro de la función -> Variable:", variableLocal, "Estado:", estado);
    }

    console.log("--- ¡Renderizando el componente! ---");

  return (
    <div>
        <div>{estado}</div>        
        <p>Variable Local se reinicia: {variableLocal}</p>
        <p>Estado se mantiene: {estado}</p>
        <button onClick={incrementarAmbos}>Incrementar</button>
    </div>
  )
}
