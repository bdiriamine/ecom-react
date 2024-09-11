import React, { useEffect, useState } from 'react'
import style from'./Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { ClearCookies } from '../../redux/action/ActionUser';
export default function Navbar() {
  const data = useSelector(state => state.CurrentUserReducer.currentuser.data) // tijbed valeur mel store
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = Cookies.get('token')
  return (
    <div>
       <nav className={style.navbar}>
             <ul className={style.navul}>
                <li >
                <Link to='/'>
                   <button className={style.btnnav}>
                      Home
                    </button>
                  </Link>
                </li>
                <li>
           {!token? <Link to='/login'>
                     <button className={style.btnnav}>
                      Login
                    </button>
               </Link> : null }    
                </li>
                <li>
                  {!token&& <Link to='/register'>
                     <button className={style.btnnav}>
                      register
                    </button>
               </Link> }
               </li>
               <li>
                {token&&               <Link to='/Profile'>
                     <button className={style.btnnav}>
                     Profile
                    </button>
               </Link>  }

                </li>
                <li>
                {token&&<Link to='/'>
                     <button className={style.btnnav} onClick={()=>{dispatch(ClearCookies(navigate))}}>
                     logout
                    </button>
               </Link> }

                </li>
             </ul>
       </nav>
    </div>
  )
}
