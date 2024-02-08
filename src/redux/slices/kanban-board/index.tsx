import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';




// let LS_tasks = JSON.parse(localStorage.getItem("LS-tasks") as any );



const kanbanSlice:any = createSlice({
    
initialState:{
    tasks:[]
},
name:"kanban-board",
reducers:{

    _addTask:(state:any,action:any)=>{


     if(Array.isArray(action.payload)){
         
         state.tasks = action.payload 
        
        }
        else if (!Array.isArray(action.payload)){
            
            state.tasks = [...state.tasks,action.payload];
            
            localStorage.setItem("LS-tasks",JSON.stringify(state.tasks));
            
        };

    },


    _removeTask:(state:any,action:any)=>{

        let filteredArr = state.tasks.filter((e:any,i:number)=> i !== action.payload );
        
        state.tasks = filteredArr;

        localStorage.setItem("LS-tasks",JSON.stringify(state.tasks));

    }

}

});


export default kanbanSlice.reducer;
export const {_addTask,_removeTask} = kanbanSlice.actions