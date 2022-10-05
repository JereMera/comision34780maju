import { useState, useEffect } from "react"

const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)


    // useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone').then(response => {
    //         // response.json().then(res => {
    //         //     console.log(res)
    //         // })
    //         return response.json()
    //     }).then( res => {
    //         setProducts(res.results)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }, [])


    const handleSearch = () => {
        setLoading(true)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`).then(response => {
            return response.json()
        }).then( res => {
            setProducts(res.results)
        })
        .catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }

    if(loading) {
        return <h1>Buscando productos...</h1>
    }

    return (
        <div>
            <h1>Mercado Libre</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleSearch}>search</button>
            {products.map(prod => {
                return(
                    <div>
                        <h1>{prod.title}</h1>
                        <img src={prod.thumbnail} alt={prod.title}/>
                        <p>$ {prod.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MercadoLibre