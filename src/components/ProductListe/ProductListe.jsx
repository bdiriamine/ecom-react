import React, { useEffect } from 'react'
import Product from '../Product/Product'
import style from './productListe.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetCurrentUserAction } from '../../redux/action/ActionUser'
export default function ProductListe() {
  const data = useSelector(state => state.ProductReducer.products) // tijbed valeur mel store
  console.log(data)
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(GetCurrentUserAction()); //tkhadem el action
},[])
  return (
    <div className={style.productlist}>
      {data?.map((res,key)=>
        <Product res={res} key={key} />
      )}
      

    </div>
  )
}
