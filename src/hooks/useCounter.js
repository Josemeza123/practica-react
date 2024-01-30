import { useState } from "react"

export const useCounter = (valorInicial = 0) => {

    const [contador, setContador] = useState(valorInicial)

    const incrementar = (valor) => {
        setContador(contador + valor)
    }
    const decrementar = (valor) => {
        setContador(contador - valor)
    }
    const resetear = () => {
        setContador(0)
    }

    return {
        contador,
        incrementar,
        decrementar,
        resetear
    }
}
