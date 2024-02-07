import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';


const kanbanSlice = createSlice({
    
initialState:{
    tasks:[]
},
name:"kanban-board",
reducers:{

    _addTask:(state:any,action:any)=>{

let rawData = localStorage.getItem("tasks");
let tasks = JSON.parse(rawData as any);

if(tasks){

  let readyArr = [...tasks,action.payload];
  
  localStorage.setItem("tasks",JSON.stringify(readyArr));

}

  
    }
}

});


export default kanbanSlice.reducer;
export const {_addTask} = kanbanSlice.actions