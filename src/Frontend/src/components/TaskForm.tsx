import { useState } from "react";
import useCreateTask from "../hooks/useCreateTask";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const createTaskMutation = useCreateTask();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent empty titles

    createTaskMutation.mutate(
      { title, description, status: 0 },
      {
        onSuccess: () => {
          setTitle(""); // ✅ Now properly resets input fields
          setDescription("");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="inline-flex flex-col w-full items-center gap-2 p-4">
      <input
        type="text"
        className="bg-slate-700 text-white px-2 py-1 rounded"
        placeholder="Task Title"
        value={title} // ✅ Make input controlled
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="bg-slate-700 text-white px-2 py-1 rounded"
        placeholder="Task description"
        value={description} // ✅ Make input controlled
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
