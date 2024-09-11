import React, { useState } from 'react'
import style from'./Registeruser.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { RegisterrAction } from '../../redux/action/ActionUser';
export default function Registeruser() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [email,setemail] = useState("");
  const [password,setUpassword] = useState("");
  const [username,setUusername] = useState("");
  const onSignUp=(e) =>{
    e.preventDefault();
    dispatch(RegisterrAction({"username":username,"email" : email, "password": password},dispatch,navigate)) //tkhadem el action 
   }
  return (
    <div className ={style.reg} >
     <p className={style.str}> Register Form</p>
      <form className={style.form} >
        <label htmlFor="email"> Email : </label>
        <input type="email"  onChange={(e)=>setemail(e.target.value)}/>
        <label htmlFor="username"> Username :</label>
        <input type="text"   onChange={(e)=>setUusername(e.target.value)}/>
        <label htmlFor="password"> Password : </label>
        <input type="password"  onChange={(e)=>setUpassword(e.target.value)}/>
        <button className={style.btn} onClick={onSignUp} disabled={!(email&&password)}>Register</button>
        <p>Allready have an account ? &nbsp;
                <Link to={"/login"} className='text-blue-700' >
                Click here to sign-in
                </Link>
            </p>
      </form>
    </div>
  )
}
