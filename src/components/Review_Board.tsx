import { Box, Button } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { _backToDoing, _goToDone, _removeTaskFromBacklog, _removeTaskFromDoing } from '../redux/slices/kanban-board';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

export default function Review_Board() {


    const storeState:any = useAppSelector( state => state.kanban );
    const dispatch = useAppDispatch();

    const tasks = storeState.review_tasks

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
  position:'relative'
    }}>
        
<div style={{
  width:"100%",
  height: "calc(78vh - 88%)",
   backgroundColor:"#4FF795",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"sticky",
    top:0,
    zIndex:10
}}>

<p style={{

  fontSize:"2.2vw",
   fontWeight:"bold",
   color:"#0B2C4D"

}}>Review</p>

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
whiteSpace:"nowrap"
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
whiteSpace:"nowrap"
}

}}
     />
   </ListItem>
<Divider />
   <ListItem alignItems="flex-start">
     <ListItemText
       primary={
         <>
         <strong>Created by: </strong> {task.name ?? "---"}
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
onClick={e => dispatch(_backToDoing(index)) }
>

<ArrowBackIosIcon/>

</Button>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* add spaces by HTML entities*/} 
<Button type="submit" variant="contained"
sx={{ mt: 1.5, mb: 0.8}}

onClick={e => dispatch(_goToDone(index)) }
>

<ArrowForwardIosIcon/>

</Button>

 </List>

))}


</div>
    </>
  )
}
