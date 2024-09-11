import React, { useEffect, useState } from 'react'
import style from './Product.module.css'
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { DeletProducts, EditOneProduct } from '../../redux/action/ActionProduct';
import { useNavigate } from 'react-router-dom';
export default function Product({res}) {
  const datermat = moment(res.date).format(' DD MMMM YYYY'); 
  const navigate=useNavigate()
  const disptach=useDispatch()
  const user = useSelector(state => state.CurrentUserReducer.currentuser)
  const userProduct =res?.seller?.username
  const [bolUser, setBolUser] = useState()
  useEffect(()=>{
    userVerification();
  },[])
  const userVerification = ()=>{
    if(user?.username===userProduct){
      setBolUser(true)
    }else{
      setBolUser(false)
    }
  }
  return (
    <div className={style.product}>
        <img src={res.img} alt=""  className={style.imagestyle}/>
        <h3>{res.name}</h3>
        <p><strong> description :  </strong> <span className={style.descText}>{res.description}  </span> </p>
        <p><strong>Price :  </strong>  {res.price}  &nbsp; DT  </p>
        <p  >Category : <button className={style.btnCat}>{res.category}  </button> </p>
        <p>date :  {datermat}</p>
        {bolUser?<button className={style.btnedit} onClick={()=>disptach(EditOneProduct(res,navigate))}  >Edit</button>:null}
        {bolUser?<button className={style.btndel} onClick={()=>disptach(DeletProducts(res._id))}>Delete</button>:null}

    </div>
  )
}
