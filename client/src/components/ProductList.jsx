import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    const {products, setProducts} = props;
    useEffect(() => {
        axios.get('http://localhost:8000/api/displayProducts')
        .then((res)=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err=> console.log(err))
    },[])
    const deleteProduct = (productId)=>{
        axios.delete('http://localhost:8000/api/deleteProduct/'+productId)
        .then((res)=>{
            setProducts(products.filter(product => product._id !== productId))
        })
        .catch((err) => console.log(err))
    }
    return (
        <div>
            {
                products.map((product,index)=> (
                    <div key={index}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link >
                        <div>
                            <Link className='btn btn-success' to={`/update/product/${product._id}`}>Update {product.title}</Link>
                            <button className='btn btn-danger' onClick={(e)=> deleteProduct(product._id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList