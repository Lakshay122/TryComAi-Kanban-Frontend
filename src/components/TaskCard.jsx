import { X } from "lucide-react";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
// import Modal from "./Modal"; // Import the Modal component
import DeleteModal from "./Modal/DeleteModal";

const TaskCard = ({ task, handleDeleteTask }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "task",
    item: { ...task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  // Badge color based on task status
  const getStatusColor = (status) => {
    switch (status) {
      case "todo":
        return "bg-blue-600 text-white";
      case "in-progress":
        return "bg-orange-500 text-white";
      case "completed":
        return "bg-teal-500 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  const handleDelete = async () => {
    await handleDeleteTask(task._id); // Call the delete handler passed as a prop
    setIsModalOpen(false); // Close the modal after deletion
  };

  return (
    <div
      ref={dragRef}
      className={`bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 px-6 py-6 rounded-lg shadow-lg transform transition-all duration-200 overflow-hidden ${
        isDragging ? "opacity-60" : ""
      }`}
    >
      <div className="flex justify-between items-center space-x-4">
        <span
          className={`text-xs font-semibold py-1 px-3 rounded-full ${getStatusColor(
            task?.status
          )}`}
        >
          {task?.status.replace("-", " ").toUpperCase()}
        </span>
        {/* Delete Icon */}
        <button
          onClick={() => setIsModalOpen(true)} // Open the modal on delete click
          className="text-gray-600 dark:text-gray-300 hover:text-red-500 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Task Content */}
      <h3 className="text-lg font-semibold mt-3 text-gray-900 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
        {task.title}
      </h3>

      {/* Modal for deletion confirmation */}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal when cancel is clicked
        onConfirm={handleDelete} // Confirm delete action
        message="Are you sure you want to delete this task?"
      />
    </div>
  );
};

export default TaskCard;
