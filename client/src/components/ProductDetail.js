import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const [product, setProduct] =useState({});
    const {_id} = useParams();
    useEffect(() =>{
    axios.get('http://localhost:8000/api/getProduct/' + _id)
        .then( res =>{
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err=> console.log(err));
    }, [])
    
    return (
        <div>
            {
            <div className='card col-6 mx-auto my-5' >
                
                <h2>{product.title}</h2>
                    <h3>{product.price}</h3>
                        <p>{product.description}</p>
                
            </div>
            }
        </div>
    )
}

export default ProductDetail