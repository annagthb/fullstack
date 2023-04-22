import React from "react";
import { useState } from "react";

const AddTask=({onAddTask})=>{

    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState('')

    const onSave=(event)=>{
      console.log('hello')
      event.preventDefault()
      if(!text){
        alert('please add a task')
      return
    }

       const id=Math.floor(Math.random()*10000)+1
       const newTask={id:id,text:text,day:day,reminder:reminder}
       onAddTask(newTask)

      setText('')
      setDay('')
      setReminder(false)
  }

    return(
        <form className="add-form" onSubmit={onSave}>
            
            <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add Task" value={text} onChange={(event)=>setText(event.target.value)}></input>
            </div>
            
            <div className="form-control">
            <label>Day & Time</label>
            <input type='text' placeholder="Add Day & Time" value={day} onChange={(event)=>setDay(event.target.value)}></input>
            </div>

            <div className="form-control from-control-check">
            <label>Set Reminder</label>
            <input type='checkbox' value={reminder} checked={reminder} onChange={(event)=>setReminder(event.currentTarget.check)}></input>
            </div>
            
            <div>
                <input type='submit' className='btn btn-block' value='Save Task' ></input>
            </div>
        </form>
    )}

export default AddTask