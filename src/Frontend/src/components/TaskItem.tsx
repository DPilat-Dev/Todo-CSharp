import { useEffect, useState } from "react";
import UserTask from "../models/UserTask"
import useUpdateTask from "../hooks/useUpdateTask";
import useDeleteTask from "../hooks/useDeleteTask";
import Modal from "react-modal";

interface prop  {
  task: UserTask;
};

const TaskItem = ({task}:prop) => {
  const [status, setStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const updateTaskMutation = useUpdateTask();
  const deleteTaskMutation = useDeleteTask();

  // Function to mark task as complete
  const handleComplete = () => {
    updateTaskMutation.mutate({
      id: task.id,
      updatedTask: {...task, status: 1 }, // 1 = Complete
    });
  };

  // Function to delete task
  const handleDelete = () => {
    deleteTaskMutation.mutate(task.id);
  };

  useEffect(() => {
    if (task.status === 0) {
      setStatus("Pending");
    } else {
      setStatus("Complete");
    }
  }, [task.status]);

  const handleEditTask = () => {
    updateTaskMutation.mutate(
      {
        id: task.id,
        updatedTask: { title: editedTitle, description: editedDescription },
      },
      {
        onSuccess: () => {
          setIsModalOpen(false); // Close modal after saving
        },
      }
    );
  };

  return (
    <div className="flex w-2/3 py-2 px-4 border-b border-gray-300">
        <div className="w-3/12">{task.title}</div>
        <div className="w-5/12">{task.description}</div>
        <div className="w-4/12">{status}</div>
        <div className="w-auto flex gap-2">
          <button 
          className="bg-green-100 text-green-600 px-2 py-1 rounded hover:bg-green-200 transition" 
          onClick={handleComplete}>
            ✔️
          </button>
          <button
          className="bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200 transition"
          onClick={() => setIsModalOpen(true)}>
            ✏️
          </button>
          <button 
          className="bg-red-100 text-red-600 px-2 py-1 rounded hover:bg-red-200 transition" 
          onClick={handleDelete}>
            🗑️
          </button>
          
        </div>
        {/* Edit Task Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-slate-700 p-6 rounded shadow-lg w-1/3 mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>

        <input
          type="text"
          className="w-full border p-2 mb-2 rounded bg-slate-700"
          placeholder="Task Title"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        
        <input
          type="text"
          className="w-full border p-2 mb-4 rounded bg-slate-700"
          placeholder="Task Description"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-red-500 rounded" onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleEditTask}>Save</button>
        </div>
      </Modal>
    </div>
  )
}

export default TaskItem