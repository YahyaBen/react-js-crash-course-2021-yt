import './index.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import Task from './components/Task';
import AddTask from './components/AddTask';
import { useState } from 'react'
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const name = 'Yahya'
  const X = false
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text:'Food',
            day:'Feb',
            reminder:false
        },
        {
            id:2,
            text:'Car',
            day:'Jan',
            reminder:true
        },
        {
            id:3,
            text:'House',
            day:'mars',
            reminder:false
        },
    ]
)

// Add task
const addTask = (task) => {
  // console.log(id)
  //console.log(task)
  const id = Math.floor(Math.random()*99)
  const newTask={id,...task}
  setTasks([...tasks, newTask])
}

// Delete task
const deleteTask = (id) => {
  // console.log(id)
  setTasks(tasks.filter((task)=> task.id !==id))
}

// Toggle reminder
const ToggleReminder = (id) => {
  // console.log(id)
  setTasks(
    tasks.map((task)=> task.id === id ? {...task,reminder: !task.reminder} : task))
}
  return (
    <div className="container">
      
      {/* <h1> Hello </h1>
      <h2> hello {name} is {X? 'Yes' : 'No'}</h2> */}
      <Header test='Task'/>
      <Tasks tasks={tasks}
      onDelete={deleteTask}
      onToggle={ToggleReminder}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
    </div>

  );
}

export default App;
