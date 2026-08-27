import { useEffect, useState } from "react"




export const TestUEClean = () => {

  const [segundos, setsegundos ] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setsegundos(prev => prev +1);
    })
  
    return () => {
      clearInterval(intervalo);
    }
  }, [])
  
  return <h1>Tiempo: {segundos}s</h1>
}
