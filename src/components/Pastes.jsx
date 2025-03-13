import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Card from './Card'
import './paste.css'
const Pastes = () => {
  const pastes=useSelector((state)=>state.paste.pastes)
  const[term,setterm]=useState('');
  const filtered=pastes.filter(
    (paste)=>paste.title.toLowerCase().includes(term.toLowerCase())
  )
  return (
    <div className='pastes'>
      <input type="search" value={term} placeholder='Search title here' onChange={(e)=>setterm(e.target.value)} />
      <div style={{color:"white"}}>
        {
          filtered.map((paste)=>
          {
            return(
              <div><Card paste={paste}/></div>
            )
          }
          )
        }
      </div>
    </div>
  )
}

export default Pastes
