import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { _addTask } from './redux/slices/kanban-board';
import Board from './components/Board';


function App() {
 
const storeState = useAppSelector( state => state.kanban );
 const dispatch = useAppDispatch();

useEffect(()=>{

let LS_tasks = JSON.parse(localStorage.getItem("LS-tasks") as any);

if(LS_tasks === null){
  
  localStorage.setItem("LS-tasks",JSON.stringify([]) as any);

}
else if( LS_tasks !== null){

    dispatch(_addTask(LS_tasks))

}

},[]);

 return (

<div className="App">

<Heading  text={'Kanban Board'}/>
<div style={{
  width:"100%",
  padding:"20px",
backgroundColor:"rebeccapurple",
display:"flex",
justifyContent:"space-around",
alignItems:"center"}}>

<Form/>
<Board/>

</div>


</div>
  );
}

export default App;
