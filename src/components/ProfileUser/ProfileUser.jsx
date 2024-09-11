import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from'./ProfileUser.mdule.css'
import { GetCurrentUserAction } from '../../redux/action/ActionUser'
import { useNavigate } from 'react-router-dom'
export default function ProfileUser() {
  const data = useSelector(state => state.CurrentUserReducer.currentuser) // tijbed valeur mel store
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(GetCurrentUserAction()); //tkhadem el action
},[])
  return (
    <div>
        <main>
        <header>
<img src="https://i.pravatar.cc/60?img=4" alt="Sally Ramos" />
    <div>
    
      <h2>{data?.username}</h2>
      <p>{data?.email}</p>
    </div>
    <button type="button">{data?.role}</button>
  </header>
  <section>
    <div>
      <p>Product Designer at @Company.<br/>Working on @myproject in my free time</p>
      <div>
        <p><span>15k</span> Followers</p>
        <p><span>7k</span> Following</p>
        <p>Since April 30, 2023</p>
      </div>
    </div>
  </section>
        </main>
    </div>
  )
}
