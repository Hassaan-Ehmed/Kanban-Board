import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import DoneAllIcon from '@mui/icons-material/DoneAll';


import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';


export default function Done_Board() {


    const storeState:any = useAppSelector( state => state.kanban );
    const dispatch = useAppDispatch();

    const tasks = storeState.done_tasks ?? [];
    console.table(tasks);

  return (
<>

<div style={{
    height:"78vh",
    width:"22vw",
    backgroundColor:"whitesmoke",
    borderRadius:"10px",
    overflow:"auto",
  display:"flex",
  flexDirection:"column",
  position:"relative",
    }}>
        
<div style={{
  width:"100%",
  height: "calc(78vh - 88%)",
   backgroundColor:"#5ae4f6",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"sticky",
    top:0,
    zIndex:2
}}>

<p style={{

  fontSize:"2.2vw",
   fontWeight:"bold",
   color:"#0B2C4D"

}}>Done</p>

</div>


{tasks.map((task:any,index:number)=>(

<List  key={index}
 sx={{
  width: "100%",
 maxWidth: "20vw",
  bgcolor: "background.paper" ,
  borderRadius:"10px",
  boxShadow:"-2px 9px 19px -14px black",
  alignSelf:"center",
  marginTop:"10px",
  border:"1px solid black"
  }} >

   <ListItem alignItems="flex-start">
     <ListItemText
       primary={
       <>
       <strong>Title: </strong>
       {task.title ?? "---"}
       </>
       }

       sx={{
"& .MuiTypography-root":{
 textOverflow:"ellipsis",
overflow:"hidden",
whiteSpace:"nowrap",
textDecoration:"line-through"
}

}}
     />
   </ListItem>
   <Divider  />
   <ListItem alignItems="flex-start">
     <ListItemText
       primary={
       <React.Fragment>
<strong>Desc: </strong> {task.desc ?? "---"}
       </React.Fragment>
       }

       sx={{
"& .MuiTypography-root":{
 textOverflow:"ellipsis",
overflow:"hidden",
whiteSpace:"nowrap",
textDecoration:"line-through"
}

}}
     />
   </ListItem>
<Divider />
   <ListItem alignItems="flex-start">
     <ListItemText
       primary={
         <>
         <strong>Created by: </strong> {task.name}
         </>
       }

       sx={{
"& .MuiTypography-root":{
 textOverflow:"ellipsis",
overflow:"hidden",
whiteSpace:"nowrap"
}

}}
     />
   </ListItem>
<Divider  />
   <ListItem alignItems="flex-start">
     <ListItemText
       primary={
<>
<strong>Time Stamp: </strong>{task.timeStamp}
</>

       }

       sx={{
"& .MuiTypography-root":{
 textOverflow:"ellipsis",
overflow:"hidden",
whiteSpace:"nowrap"
}

}}
     />
   </ListItem>
<Divider/>
<Button type="submit" variant="contained"
sx={{ mt: 1.5, mb: 0.8}}

>

<DoneAllIcon/>

</Button>

 </List>

))}


</div>

</>
  )
}
