import Task from './Task'

const Tasks=({importedTasks,onDelete,onToggle})=>{
   
    return (
    <div>{importedTasks.map((task)=>
        (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>))}</div>)
    }
export default Tasks