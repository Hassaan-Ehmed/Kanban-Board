import { Box, Button } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import { _removeTask } from '../redux/slices/kanban-board';

export default function Board() {



    const storeState:any = useAppSelector( state => state.kanban );
    const dispatch = useAppDispatch();


    console.log(storeState.tasks)
  return (
    <>
<div style={{
    height:"78vh",
    width:"22vw",
    backgroundColor:"whitesmoke",
 display:"flex",
 flexDirection:"column",
 justifyContent:"center",
 alignItems:"center",
 overflow:"auto"

    }}>


{storeState.tasks.map((task:any,index:number)=>(
<>

<div  key={index} style={{width:"87%",backgroundColor:"grey", border:"1px solid red",marginTop:"10px"}}>
<h2>title: {task.title ?? "---"}</h2>
<h2>Desc: {task.desc ?? "---"}</h2>
<h2>Created by: {task.name ?? "---"}</h2>
<h2>Date: {task.date.month} {task.date.day} {task.date.year}</h2>

<Button type="submit" variant="contained"
 sx={{ mt: 3, mb: 2 }}
 
 onClick={e => dispatch(_removeTask(index))}
 
 >
Send &nbsp;<SendIcon/>
</Button>

</div>

</>
))}

</div>





    </>
  )
}
