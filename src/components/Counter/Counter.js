import { useState } from 'react'

const Counter = ({onAdd}) => {
    const [result, setResult] = useState(0)
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)


    const restar = () => {
        setResult(value1 - value2)
    }

    const sumar = () => {
        setResult(parseInt(value1) + parseInt(value2))
    }
    
    return (
        <div>
            <h1>{result}</h1>
            {/* <button onClick={restar}>restar</button> */}
            <input value={value1} onChange={(e) => setValue1(e.target.value)}/>
            <input value={value2}  onChange={(e) => setValue2(e.target.value)}/>
            <button onClick={restar}>restar</button>
            <button onClick={sumar}>sumar</button>
            <button onClick={onAdd}>agregar al carrito </button>
        </div>
    )
}

export default Counter