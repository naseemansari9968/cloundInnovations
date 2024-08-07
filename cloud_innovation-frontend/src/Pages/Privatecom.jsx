import React from 'react'
import { Outlet, useNavigate,  } from 'react-router-dom'
import Signup from './Signup';


const Privatecom = () => {
    const auth = localStorage.getItem("user");

  return (
    auth ? <Outlet /> : <Signup />
  )
}

export default Privatecom