import axios from "axios"
import { LOGIN,GetCurrentUserconst, REGISTER } from "../const/user"
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { showErrorToast, showSuccessToast } from "./toastActions";

export  const LoginUserAction = (body,navigate)=>async (dispatsh) =>{
   
    try{
        const res = await axios.post('http://localhost:4000/api/user/login',body,{withCredentials:true})
        // Cookies.set('token',res.data.token)
        document.cookie = `user=${JSON.stringify(res.data.user)} ; path=/`;
        dispatsh({
            type:LOGIN,
            payload:res.data,
        })
        dispatsh(GetCurrentUserAction())
        dispatsh(showSuccessToast("login with succsess"));
        navigate('/Profile')
    }catch(err){
        console.log(err)
        dispatsh(showErrorToast(err.response?.data?.msg));
    }
}
export  const GetCurrentUserAction = ()=>async (dispatch) =>{
    try{
        const token =getCookie('token')
        if(token){
            const res = await axios.get('http://192.168.1.199:4000/api/user',{
                headers: {
                  'Authorization': `Bearer ${token}`
                }})
                dispatch({
                type: GetCurrentUserconst,
                payload:res.data
            })
        }
  
    }catch(err){
        ClearCookies()
    }
}
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim(); 
      if (cookie.startsWith(nameEQ)) {
        return decodeURIComponent(cookie.substring(nameEQ.length)).replace(/^"|"$/g, ''); 
      }
    }
    return null; 
  }

export const ClearCookies=(navigate)=> (dispatsh) =>{
    try{
        Cookies.remove('token');Cookies.remove('user');
        navigate('/')

    }catch(err){

    }


}

export  const RegisterrAction = (body,dispatch,navigate)=>async (dispatsh) =>{

    try{
        const res = await axios.post('http://192.168.1.199:4000/api/user/register',body)
        dispatsh({
            type:REGISTER,
            payload:res.data,
        })
        dispatch(showSuccessToast("Register with succsess"));
        navigate('/')
    }catch(err){
        dispatch(showErrorToast(err.response?.data?.errors[0]?.msg));
    }
}