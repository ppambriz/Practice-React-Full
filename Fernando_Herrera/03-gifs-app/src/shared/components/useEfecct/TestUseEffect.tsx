import { useEffect, useState } from "react"


export const TestUseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `Contador: ${count}`;

    }, [count])
    


  return <button onClick={() => setCount(c => c + 1)}>Incrementa el titulo {count}</button>
}
