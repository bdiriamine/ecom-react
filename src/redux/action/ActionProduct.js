import axios from "axios"
import { DELETPRODUCT, EDITPRODUCT, GETONEPRODUCT, GETPRODUCT, POSTPRODUCT } from "../const/products"
import Cookies from 'js-cookie';
import { showSuccessToast, showErrorToast } from './toastActions';
export  const GetProducts = ()=>async (dispatsh) =>{
    
    try{
        const res = await axios.get('http://192.168.1.199:4000/api/product')
        dispatsh({
            type:GETPRODUCT,
            payload:res.data
        })
    }catch(err){
        console.log(err)
    }
}
export  const PostProducts = (body,navigate,dispatch)=>async (dispatsh) =>{
    try{
        const token = Cookies.get('token')
        const res = await axios.post('http://192.168.1.199:4000/api/product',body,{
             headers: { Authorization: `Bearer ${token}`} })
        dispatsh({
            type:POSTPRODUCT,
            payload:res
        })
        dispatch(GetProducts())
        dispatch(showSuccessToast("Product Add with success"))
        navigate('/')
    }catch(err){
        showErrorToast(err.message)
    }
}
export const EditProducts = (id,data,navigate,dispatsh) => async (dispatch) => {
    try {
        const token = Cookies.get('token')
      const res= await axios.patch(`http://localhost:4000/api/product/${id}`,data,{
        headers: { Authorization: `Bearer ${token}`} })
      dispatch({
          type:EDITPRODUCT,
          Payload:res
      })   
       dispatch(GetProducts())
      navigate('/')
      dispatsh(showSuccessToast("Edit with success")) 
   
    } catch (error) {
        showErrorToast(error.message)
  
  }}

export  const DeletProducts = (id)=>async (dispatsh) =>{
    try{
        const token = Cookies.get('token')
        const res =  await axios.delete(`http://192.168.1.199:4000/api/product/${id}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }})
        dispatsh({
            type:DELETPRODUCT,
            payload:res
        })
        dispatsh(GetProducts())
        dispatsh(showSuccessToast("delete with success")) 
    }catch(err){
        dispatsh(showSuccessToast(err.message)) 
    }
}
export const EditOneProduct=(res,navigate)=>{
    console.log(res)
navigate(`/editProduct/${res._id}`)
return {type:GETONEPRODUCT,payload:res}
}