import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"


function App() {

  return (
    
    <div>
      <div className="flex items-center h-full">
        <TaskList />
      </div>
      <div className="flex items-center h-full">
        <TaskForm />
      </div>
    </div>
  )
}

export default App
