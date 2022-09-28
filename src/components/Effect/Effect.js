import { useState, useEffect } from "react"


const Effect = () => {
    const [title, setTitle] = useState('primer titulo')

    useEffect(() => {
        console.log('despues de render')

        return () => {
            console.log('antes de desmontarse')
        }
    }, [])

    useEffect(() => {
        console.log('despues de cambiar el titulo')
    }, [title])

    console.log('render')
    
    return(
        <div>
            <h1>Effect</h1>
            <h2>{title}</h2>
            <button onClick={() => setTitle('cambie titulo')}>cambiar titulo</button>
        </div>
    )
}

export default Effect