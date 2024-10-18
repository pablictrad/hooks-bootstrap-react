import { useCounter } from "../hooks/useCounter"

export const Contador = () => {

  const {  contador, incrementar, decrementar,decrementar0, resetear } = useCounter(0)

  return (
    <>
        <h1>Contador: {contador}</h1>
        <button className="btn btn-primary" onClick={ () => incrementar(1) }>+1</button>
        <button className="btn btn-danger" onClick={ () => resetear() }>Reset</button>
        <button className="btn btn-primary" onClick={ () => decrementar(1) }>-1</button>
        <h3>Decrementar con tope 0</h3>
        <button className="btn btn-success" onClick={ () => decrementar0(1,false) }>-1</button>
    </>
  )
}
