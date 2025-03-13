import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addTopaste,updateTopaste } from '../redux/paste';
import { format } from 'date-fns';

import './home.css'
const Home = () => {
  const[title,settitle]=useState('')
  const [value,setvalue]=useState('')
  const [searchparams,setparams]=useSearchParams('')
  const pasteId=searchparams.get("pasteId")||null
  const dispatch=useDispatch()
  const apastes=useSelector((state)=>state.paste.pastes)
  const date=new Date().toLocaleDateString()
  useEffect(()=>{
    if(pasteId){

      const paste=apastes.find((p)=>
        p._id===pasteId
    )
    settitle(paste.title)
    setvalue(paste.content)
  }
  },[pasteId])
  function createpaste(){
    const paste={
      title:title,
      content:value,
      _id:pasteId||Date.now().toString(20),
      
      createdat:format(date, 'MMM dd yyyy'),
    }
    console.log(paste._id)
    if(pasteId){
      dispatch(updateTopaste(paste));
    }
    else{
      dispatch(addTopaste(paste));
    }
    settitle('')
    setvalue('')
    setparams(new URLSearchParams());
  }
  return (
    <>
    <div className='home'>
      <input type="text" placeholder='Enter Title' value={title} onChange={(e)=>settitle(e.target.value)}/>
      <button className='pbut' onClick={createpaste}>
        {pasteId?"Update your paste":"Create paste"}
      </button>
    </div>
    <div>
      <textarea name="paste" id="paste" 
      value={value}
      placeholder='enter content' 
      rows='25' 
      style={{width:'500px',marginLeft:'30%'}}
      onChange={(e)=>setvalue(e.target.value)}
      ></textarea>
    </div>
    </>
  )
}

export default Home
