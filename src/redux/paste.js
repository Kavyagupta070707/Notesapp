import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pastes:localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  :[]
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addTopaste: (state,action) => {
     const paste= action.payload
     if(paste.title==='' || paste.content===''){
      alert("YOU are creating empty paste")
     }
     else{

       state.pastes.push(paste)
       localStorage.setItem("pastes",JSON.stringify(state.pastes))
       alert("New paste created")
      }
    },
    updateTopaste: (state,action) => {
      const paste =action.payload
      const index=state.pastes.findIndex((item)=>
      item._id==paste._id);
      console.log(paste._id)
      if(index>=0){
        state.pastes[index]=paste
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
      }
      alert("Paste updated")
    },
    reset: (state, action) => {
      state.pastes=[]
      localStorage.setItem("pastes", JSON.stringify([]));
    },
    deletepaste:(state,action)=>{
      const pasteId=action.payload
      const index=state.pastes.findIndex((item)=>
      String(item._id)===String(pasteId));
      if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
        alert("Paste deleted")
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTopaste, updateTopaste, reset, deletepaste} = pasteSlice.actions

export default pasteSlice.reducer 