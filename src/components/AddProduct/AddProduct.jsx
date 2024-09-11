import React, { useState } from 'react';
import style from './AddProduct.module.css';
import { useDispatch } from 'react-redux';
import { PostProducts } from '../../redux/action/ActionProduct';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const [category, setCategory] = useState('');

  const user =JSON.parse(Cookies.get('user'))
  const [userpro, setUserpro] = useState(user._id);
  console.log(userpro)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', prix);
    formData.append('file', imgFile);
    formData.append('category', category);
    formData.append('seller',userpro)

    dispatch(PostProducts(formData,navigate,dispatch));
  };

  return (
    <div className={style.reg}>
      <p className={style.str}>Add Product</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="prix">Price</label>
        <input
          type="number"
          id="prix"
          name="prix"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />
        <label htmlFor="photo">Image</label>
        <input
          type="file"
          id="photo"
          name="photo"
          onChange={(e) => setImgFile(e.target.files[0])}
        />
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)} 
        >
          <option >Select one</option>
          <option value="mobile">Phone</option>
          <option value="tablette">Tablette</option>
          <option value="pc">pc</option>
        </select>
        <br />
        <button type="submit" className={style.btn}>Send Product</button>
      </form>
    </div>
  );
}