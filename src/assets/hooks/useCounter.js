import { useState } from "react"

export const useCounter = (valorInicial = 0) => {

    const [contador, setContador] = useState(valorInicial)

    const incrementar = (valor = 1) => {
        setContador(contador + valor)
    }

    const decrementar = (valor = 1) => {
        setContador(contador - valor)
    }
    // si quiero que no muestre negativos
        const decrementar0 = (valor = 1, negativo=true) => {
            if(!negativo && contador - valor < 0){
            setContador(0)
            return
            }
        setContador(contador - valor)
    }
     

    const resetear = () => {
        setContador(0)
    }

    return {
        contador,
        incrementar,
        decrementar,
        decrementar0,
        resetear
    }

}
