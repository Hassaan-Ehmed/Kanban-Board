import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { _addTaskInBacklog, _setTaskInDoing, _setTaskInDone, _setTaskInReview } from './redux/slices/kanban-board';
import Backlog_Board from './components/Backlog_Board';
import Doing_Board from './components/Doing_Board';
import Review_Board from './components/Review_Board';
import Done_Board from './components/Done_Board';
import Dialogg from './components/MUI/Dialog';

function App() {
 
const storeState:any = useAppSelector( state => state.kanban );
 const dispatch = useAppDispatch();

useEffect(()=>{

let LS_Backlog = JSON.parse(localStorage.getItem("LS-Backlog") as any);
let LS_Doing = JSON.parse(localStorage.getItem("LS-Doing") as any);
let LS_Review = JSON.parse(localStorage.getItem("LS-Review") as any);
let LS_Done = JSON.parse(localStorage.getItem("LS-Done") as any);

// Mounting Logic for Backlog 
if(LS_Backlog === null ){
  
  localStorage.setItem("LS-Backlog",JSON.stringify([]) as any);
  
}
else if( LS_Backlog !== null){

    dispatch(_addTaskInBacklog(LS_Backlog));  

}

// Mounting Logic for Doing 
if (LS_Doing === null){
  
  localStorage.setItem("LS-Doing",JSON.stringify([]) as any);
}
else if (LS_Doing !== null){

  dispatch(_setTaskInDoing(LS_Doing));

}

// Mounting Logic for Review 
if (LS_Review === null){
  
  localStorage.setItem("LS-Review",JSON.stringify([]) as any);
}else if(LS_Review !== null){

dispatch(_setTaskInReview(LS_Review));

}

// Mounting Logic for Done
if(LS_Done === null){

  localStorage.setItem("LS-Done",JSON.stringify([]) as any);
}else if(LS_Done !== null){
 
dispatch(_setTaskInDone(LS_Done));

}

},[]);

 return (

<div className="App">

<Heading  text={'Kanban Board'}/>
<div style={{
  width:"100%",
  padding:"20px",
display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"50px"
}}>

<Backlog_Board />
<Doing_Board />
<Review_Board/>
<Done_Board/>

</div>



</div>
  );
}

export default App;
