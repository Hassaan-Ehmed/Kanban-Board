import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { _addTask } from './redux/slices/kanban-board';

function App() {
 
const storeState = useAppSelector(  state => state.kanban );
 
let data = localStorage.getItem("tasks");
let tasks = JSON.parse(data as any);

console.log(storeState.tasks);


 return (

<div className="App">

<Heading  text={'Kanban Board'}/>

<Form/>

</div>
  );
}

export default App;
