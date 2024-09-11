import React, {  useState } from 'react'
import style from'./LoginUser.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Circles } from 'react-loading-icons'

import { useDispatch } from 'react-redux';
import { LoginUserAction } from '../../redux/action/ActionUser';

export default function LoginUser() {
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const [email,setemail] = useState("");
  const [password,setUpassword] = useState("");
  const[loader,setLoader] = useState();
  const onSignIn=(e) =>{
    e.preventDefault();
    setLoader(true)
    dispatch(LoginUserAction({"email" : email, "password": password},navigate)) //tkhadem el action 
    setLoader(false)
    navigate('/')
   }

    return (
        <div className ={style.reg} >
         <p className={style.str}> Login Form</p>
          <form className={style.form} >
          <h2 className="text-md">Enter your email and your password to Sign in </h2>
            <label htmlFor="email"> Email : </label>
            <input type="email"  onChange={(e)=>setemail(e.target.value)}   />
            <label htmlFor="password"> Password : </label>
            <input type="password" onChange={(e)=>setUpassword(e.target.value)}  />
            <button className={style.btn} onClick={onSignIn} disabled={!(email&&password)}> {loader? <Circles />: <p>Login</p> }</button>
            <p>Don't have an account ? &nbsp;
                <Link to={"/register"} className='text-blue-700' >
                Click here to Create An Account
                </Link>
            </p>
          </form>
        </div>
      )
    }
