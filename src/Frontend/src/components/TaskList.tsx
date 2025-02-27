import useTasks from "../hooks/useTasks"
import UserTask from "../models/UserTask";
import TaskItem from "./TaskItem"

const TaskList = () => {
  const {data: tasks, isLoading, error} = useTasks();

  if (isLoading) return <p>Loading tasks...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="flex flex-col w-full items-center">
        {tasks?.map((task : UserTask) => (
          <TaskItem key={task.id} task = {task}/>
        ))}
    </div>
  )
}

export default TaskList