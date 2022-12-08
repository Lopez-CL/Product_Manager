import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:8000/api/displayProducts')
        .then((res)=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err=> console.log(err))
    },[])
    
    return (
        <div>
            {
                products.map((product,index)=> (
                    <div key={index}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link >
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList