import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './view.css'
const View = () => {
  
  const [searchparams,setparams]=useSearchParams('')
  const pasteId=searchparams.get("pasteId")||null
  console.log(pasteId)
  const apastes=useSelector((state)=>state.paste.pastes)
  
    const paste=apastes.find((p)=>p._id===pasteId)
  
  return (
    <div className='view'>
      <h1>
        {paste.title.toUpperCase()}
      </h1>
      <textarea name="cont" id="cont"value={paste.content} rows={25} disabled></textarea>
    </div>
  )
}

export default View
