import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from'./EditProduct.module.css'
import { useNavigate } from 'react-router-dom'
import { EditProducts } from '../../redux/action/ActionProduct'
export default function EditProduct() {
  const data = useSelector(state => state.ProductReducer.oneproduct)
  console.log(data)
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [prix, setPrix] = useState(data.price);
  const [imgFile, setImgFile] = useState(data.img);
  const [category, setCategory] = useState(data.category);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlesubmit = (e) => {
   
    e.preventDefault()
    const formData= new FormData()
    formData.append("name",name)
    formData.append("description",description)
    formData.append('price',prix)
    formData.append('category',category);
    formData.append('file',imgFile)

    dispatch(EditProducts(data._id,formData,navigate,dispatch))
  };
  return (
    <div className={style.compoedit} >
      <form  className={style.formedit} onSubmit={handlesubmit}>
          <label htmlFor="name">Name : </label>
          <input type="text"  name="Name" id="Name"  onChange={(e)=>setName(e.target.value)}  placeholder={data.name} />
          <label htmlFor="Description">Description : </label>
          <input type="text"  name="Description" id="Description" onChange={(e)=>setDescription(e.target.value)} placeholder={data.description}/>
          <label htmlFor="Price">Price : </label>
          <input type="number"  name="Price" id="Price" onChange={(e)=>setPrix(e.target.value)}  placeholder={data.price}/>
          <label htmlFor="Category">Category : </label>
          <select   onChange={(e) => setCategory(e.target.value)} defaultValue={data.category} selected={category}>
          <option value="pc">PC</option>
          <option value="mobile">Phone</option>
          <option value="tablette">Tablette</option>
          </select>
          <br />
          <label htmlFor="Picture">Picture : </label>
          <input type="file"  name="Picture" id="Picture"  onChange={(e) => setImgFile(e.target.files[0])} />
        <button className={style.btnsave} > Save  Product </button>
        <button className={style.btnback} onClick={()=>{navigate('/')}} > Back Home </button>
      </form>
    </div>
  )
}
