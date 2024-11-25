// KanbanBoard.js
import React, { useState, useEffect } from "react";
import Column from "./Column";
import CreateTaskModal from "../Modal/CreateTaskModal"; // Import modal component
import { getAllTodos, addNewTodo } from "../../config/api"; // Fetch tasks from the API
import KanbanBoardHeader from "./Heading";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const loadTasks = async () => {
    const response = await getAllTodos();
    console.log(response);
    setTasks(response?.data); // Setting the tasks fetched from the API
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const columns = ["in-progress", "todo", "completed"];

  // Open the modal
  const openModal = () => setIsModalOpen(true);

  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  // Function to handle adding a new task
  const handleCreateTask = async (newTask) => {
    try {
      // Assuming `addNewTodo` is an API call to create a new task
      const response = await addNewTodo(newTask); // Create new task via API
      const createdTask = response.data;
      console.log("created task", createdTask);

      // Optimistically update the tasks array with the newly created task
      setTasks((prevTasks) => [...prevTasks, createdTask]);

      // Close the modal after creation
      closeModal();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen p-1 sm:p-4 lg:items-center">
      <KanbanBoardHeader openModal={openModal} />

      {/* Modal to create new task */}
      <CreateTaskModal
        loadTasks={loadTasks}
        setTasks={setTasks}
        isOpen={isModalOpen}
        closeModal={closeModal}
        handleCreateTask={handleCreateTask} // Passing the create task handler
      />

      {/* Flex container for columns */}
      <div className="flex flex-col items-center sm:items-start  sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        {columns.map((status) => (
          <Column
            key={status}
            status={status}
            tasks={tasks?.filter((task) => task.status === status)} // Filter tasks based on status
            setTasks={setTasks} // Pass down setTasks to handle updates
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
