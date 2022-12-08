import React from 'react'
import ProductList from '../components/ProductList'
import ProductsForm from '../components/ProductsForm'
const Main = () => {
    return (
        <div>
            <ProductsForm/>
            <hr></hr>
            <ProductList/>
        </div>
    )
}

export default Main