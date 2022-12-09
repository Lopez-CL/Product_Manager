import React, {useState} from 'react'
import ProductList from '../components/ProductList'
import ProductsForm from '../components/ProductsForm'
const Main = () => {
    const [products, setProducts] = useState([])
    return (
        <div>
            <ProductsForm products= {products} setProducts= {setProducts}/>
            <hr></hr>
            <ProductList products= {products} setProducts= {setProducts}/>
        </div>
    )
}

export default Main