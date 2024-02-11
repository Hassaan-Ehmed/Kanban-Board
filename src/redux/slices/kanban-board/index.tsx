import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';
import { getCurrentTimeStamp} from '../../../utils/helperFunctions';


const kanbanSlice:any = createSlice({
    
initialState:{
    backlog_tasks:[],
    doing_tasks:[],
    review_tasks:[],
    done_tasks:[],
},
name:"kanban-board",
reducers:{

    _addTaskInBacklog:(state:any,action:any)=>{


     if(Array.isArray(action.payload)){
         
         state.backlog_tasks = action.payload 
        
        }
        else if (!Array.isArray(action.payload)){
            
            state.backlog_tasks = [...state.backlog_tasks,action.payload];
            
            localStorage.setItem("LS-Backlog",JSON.stringify(state.backlog_tasks));
            
        };

    },


    _removeTaskFromBacklog:(state:any,action:any)=>{

        let filteredArr = state.backlog_tasks.filter( (_:any,i:number)=> i !== action.payload );
        
        let removeByBacklog = state.backlog_tasks.filter( (_:any,i:number)=> i === action.payload );

        let timeStamp = getCurrentTimeStamp();

        let removeByBacklog_UPDATED = {
            
            // i filter removeable item and update his date to current date so when i filter he gives me 
            //that object but in array bcz filter() method returns an array so i target first index [also we have only one index ]
            ...removeByBacklog[0],
            timeStamp : timeStamp
        }
        
        state.doing_tasks = [...state.doing_tasks,removeByBacklog_UPDATED];

        state.backlog_tasks = filteredArr;

        localStorage.setItem("LS-Backlog",JSON.stringify(state.backlog_tasks));
        localStorage.setItem("LS-Doing",JSON.stringify(state.doing_tasks));
        
    },


    _setTaskInDoing:(state:any,action:any)=>{

        state.doing_tasks = action.payload

    },


    _removeTaskFromDoing:(state:any,action:any)=>{  

        let filteredArr = state.doing_tasks.filter((_:any,i:number)=> i !== action.payload);
        
        let removeByDoing = state.doing_tasks.filter((_:any,i:number)=> i === action.payload);


        let timeStamp = getCurrentTimeStamp();

        let removeByDoing_UPDATED = {
            ...removeByDoing[0],
         timeStamp :timeStamp
        }


state.review_tasks = [...state.review_tasks,removeByDoing_UPDATED];
state.doing_tasks = filteredArr


        localStorage.setItem("LS-Doing",JSON.stringify(state.doing_tasks));
        localStorage.setItem("LS-Review",JSON.stringify(state.review_tasks));

    },


    _setTaskInReview:(state:any,action:any)=>{

        state.review_tasks = action.payload
    },

    _backToDoing:(state:any,action:any)=>{

        let filteredArr =  state.review_tasks.filter((_:any,i:number)=> i !== action.payload);

        let backToDoing = state.review_tasks.filter((_:any,i:number)=> i === action.payload);

                state.review_tasks = filteredArr;

let timeStamp = getCurrentTimeStamp();

let backToDoing_UPDATED = {
    ...backToDoing[0],
    timeStamp:timeStamp
}

            state.doing_tasks = [...state.doing_tasks,backToDoing_UPDATED];

            localStorage.setItem("LS-Doing",JSON.stringify(state.doing_tasks));
            localStorage.setItem("LS-Review",JSON.stringify(state.review_tasks));


    },

    _goToDone:(state:any,action:any)=>{

        let filteredArr = state.review_tasks.filter((_:any,i:number)=>i !== action.payload);

        let removeFromReview = state.review_tasks.filter((_:any,i:number)=> i === action.payload);


       let timeStamp = getCurrentTimeStamp();

        let removeFromReview_UPDATED = {

            ...removeFromReview[0],
            timeStamp:timeStamp
        }


    state.review_tasks = filteredArr;
    state.done_tasks = [...state.done_tasks,removeFromReview_UPDATED]
    
localStorage.setItem("LS-Review",JSON.stringify(state.review_tasks));
localStorage.setItem("LS-Done",JSON.stringify(state.done_tasks));

    },

 _setTaskInDone:(state:any,action:any)=>{
    
    state.done_tasks = action.payload
 
}

}

});


export default kanbanSlice.reducer;
export const {_addTaskInBacklog,_removeTaskFromBacklog,_setTaskInDoing,_removeTaskFromDoing,_setTaskInReview,_backToDoing,_goToDone,_setTaskInDone} = kanbanSlice.actions