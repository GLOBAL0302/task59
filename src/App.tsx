import './App.css'
import MovieTask from './conteiners/MovieTask/MovieTask.tsx';
import {useState} from 'react';
import MemTask from './conteiners/MemTask/MemTask.tsx';

const App = () => {
  const[showTask1, setShowTask1] = useState(false)
  const[showTask2, setShowTask2] = useState(false)

  return (
    <>
      <div className="task_1 mb-3">
        {showTask1?<MovieTask/>:""}
        <button
          className="btn btn-primary"
          onClick={()=>setShowTask1(prevState => !prevState)}>show Movie Task</button>
      </div>
      <div>
        {showTask2?<MemTask/>:""}
        <button
          className="btn btn-danger"
          onClick={()=>setShowTask2(prevState => !prevState)}>
          Show Mem Task
        </button>
      </div>
    </>
  )
};

export default App
