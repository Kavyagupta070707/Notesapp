import React from 'react'
import {NavLink} from"react-router-dom"
import './card.css'
import {useDispatch} from 'react-redux'
import { deletepaste } from '../redux/paste';
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const Card = ({paste}) => {
  const handleShare = async (paste) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: paste.title,
          text: paste.content,
          
        });
        alert("Shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  }
    const dispatch=useDispatch();
  
    function handledelete(pasteId){
        dispatch(deletepaste(pasteId))
    }
  return (
    <div className='card'>
      <h2>
      {paste.title}
      </h2>
      <div>
        {paste.content.slice(0,30)+"..."}
      </div>
      <div className='but'>
      <button>
      <a href={`./?pasteId=${paste._id}`}><FaEdit/></a>
      </button>
      <button>
     <a href={`./pastes/pastes/?pasteId=${paste._id}`}><FaEye/></a>
      </button>
      <button onClick={()=>handledelete(paste._id)}>
      <MdDeleteForever />
      </button>
      <button onClick={()=>{navigator.clipboard.writeText(paste.content)}}>
      <FaCopy/>
      </button>
      <button onClick={()=>handleShare(paste)}>
        <FaShare/>
      </button >
      </div>
      <div>
        {paste.createdat}
      </div>
    </div>
  )
}

export default Card
