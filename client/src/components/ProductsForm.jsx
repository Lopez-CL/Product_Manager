import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const ProductsForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/createProduct',{
            title,
            price,
            description
        })
            .then(res =>{
                console.log(res)
                console.log(res.data)
                setProducts([...products, res.data])
            })
            .catch(err => console.log(err));
        setTitle('');
        setPrice('');
        setDescription('');
    }
    return (
        <div className='px-5'>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <label className='form-label' htmlFor='title'>Title </label>
                <input className='form-control' type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
                <label className='form-label' htmlFor='price'>Price </label>
                <input className='form-control' type='number' inputMode='decimal' min='0' step='0.01' onChange={(e) => setPrice(e.target.value)} value={price}/>
                <label className='form-label' htmlFor='description'>Description </label>
                <input className='form-control' type='text' onChange={(e) => setDescription(e.target.value)} value={description} /><br></br>
                <input className='btn btn-success' type='submit' value="Create Product"/>
            </form>
        </div>
    )
}

export default ProductsForm;