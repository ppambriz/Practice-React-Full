import { useState } from "react"


export const useCounter = ( initialValue: number = 10) => {
    const [counter, setCounter] = useState(initialValue)

    const handleAdd = () => {
        setCounter(c => c + 1)
    }

    const handleSubtract = () => {
        if (counter <= initialValue) return
        setCounter(c => c - 1)
    }
    
    const handleReset = () => {
        setCounter(initialValue)
    }
  return {
    //Properties
    counter,

    //Methods / actios
    handleAdd,
    handleSubtract,
    handleReset
  }
}
