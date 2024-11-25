import React, { useState } from "react";
import { addNewTodo } from "../../config/api"; // Import API call to create task
import { X } from "lucide-react"; // Import X icon for close button

const CreateTaskForm = ({ setTasks, closeModal, loadTasks }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo"); // Default to "todo"

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optimistically update the task list with the new task
    const newTask = { title, status };

    try {
      // Call API to create the task
      await addNewTodo(newTask);
      loadTasks(); // Reload tasks after creation
      closeModal(); // Close modal after task creation
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
      >
        <X className="w-5 h-5" />
      </button>

      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Create New Task
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
