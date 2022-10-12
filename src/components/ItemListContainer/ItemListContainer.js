import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting  }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
       
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])

    useEffect(() => {
        const onResize = (e) => console.log(e)

        window.addEventListener('resize', onResize)

        return () => { 
            window.removeEventListener('resize', onResize)
            console.log('removi event listener')
            }
        }, [])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    // if(products.length === 0) {
    //     return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    // }

    // const handleKeyDown = (e) => {
    //     console.log(e)
    //     if(e.code === 'KeyA') {
    //         e.preventDefault()
    //     }
    // }

    return (
        <div 
            // onClick={(event) => console.log(event)}
            onClick={() => console.log('itemlistContainer')}
        >
            {/* <button onClick={(e) => console.log(e)}>boton</button> */}
            {/* <input onKeyDown={handleKeyDown}/> */}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer

const onCLick = (callback) => {
    //aca ocurre un codigo
    const event = {

    }

    callback(event)
}