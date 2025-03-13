import React from 'react'
import './Nav.css'
import {NavLink} from"react-router-dom"
const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink to={'/'}>
        Home
      </NavLink>
      <NavLink to={'/pastes'}>
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
