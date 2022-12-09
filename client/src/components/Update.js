import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Update = () => {
    const {_id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/getProduct/'+_id)
            .then((res) => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch((err) => console.log(err));
    }, [])
    const updatePerson = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateProduct/'+_id, {
            title,
            price,
            description
        })
            .then((res)=>{
                console.log(res)
                navigate('/')
            })
            .catch((err) => console.log(err))
    }
    return (
    <div className='px-5'>
            <h1>Update Product</h1>
            <form onSubmit={updatePerson}>
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

export default Update