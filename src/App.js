import './style/style.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Tasks from './components/Tasks';
import { useState } from 'react'
function App() {
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
// Delete task
const deleteTask = (id) => {
  console.log('delete',id)
}
  return (
    <div className="container">
      
      <h1> Hello </h1>
      <h2> hello {name} is {X? 'Yes' : 'No'}</h2>
      <Header test='Yahya'/>
      <Tasks tasks={tasks}
      onDelete={deleteTask}
      />
      <Navbar />
    </div>

  );
}

export default App;
