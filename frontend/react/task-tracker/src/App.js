import './App.css';
import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask'
const react=require('react')

const App = () => {
const [showAddTask,setShowAddTask]=useState([false])

  const [initialTasks,setTasks] = useState([{   id:1,
    text:"Doctors Appointment",
    day:"Feb 5th at 2.30pm",
    reminder:true
}
,
{
    id:2,
    text:"Meeting at School",
    day:"Feb 6th at 1.30pm",
    reminder:true
},
{
    id:3,
    text:"Food shopping",
    day:"Feb 4th at 2.30am",
    reminder:false
}]);

  const deleteTask=(id)=>{setTasks(initialTasks.filter((task)=>task.id!==id))
  }

  const toggleReminder=(id)=>{
    setTasks(initialTasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))

  }

  const addTask=(task)=>{
   
    setTasks([...initialTasks,task])
    console.log(initialTasks)
  }


    return (
      <div className="container">
      <Header title="" onAdd={()=>setShowAddTask
        (!showAddTask)} showAddTask={showAddTask}></Header>
      {showAddTask?(<AddTask onAddTask={addTask}></AddTask>):('')}
      {initialTasks.length>0?(
      <Tasks importedTasks={initialTasks} onDelete={deleteTask} onToggle={toggleReminder} 
      ></Tasks>):('No Tasks To Show')}
      </div>
    )
  }

export default App;
