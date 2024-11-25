// DeleteTaskButton.js
import React, { useState } from "react";
import { removeTodo } from "../api"; // Import the API call to delete a task
import Modal from "./Modal"; // Import the Modal component
import DeleteModal from "./Modal/DeleteModal";

const DeleteTaskButton = ({ task, setTasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleDelete = async () => {
    try {
      await removeTodo(task._id); // Call the API to delete the task
      setTasks((prevTasks) => prevTasks.filter((t) => t._id !== task._id));
      setIsModalOpen(false); // Close the modal after successful deletion
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)} // Open the modal on button click
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Delete Task
      </button>

      {/* Modal component */}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close the modal when 'Cancel' is clicked
        onConfirm={handleDelete} // Call the handleDelete function when 'Confirm' is clicked
        message="Are you sure you want to delete this task?" // Modal message
      />
    </>
  );
};

export default DeleteTaskButton;
