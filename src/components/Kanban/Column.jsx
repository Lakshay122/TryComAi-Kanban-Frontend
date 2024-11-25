import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "../TaskCard";
import { changeTodoStatus, removeTodo } from "../../config/api"; // Add your API delete function here

const Column = ({ status, tasks, setTasks }) => {
  // Function to update the task status locally and call the API to update it on the server
  const moveTask = async (task, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t._id === task._id ? { ...t, status: newStatus } : t
      )
    );

    try {
      await changeTodoStatus(task._id, newStatus);
    } catch (error) {
      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t._id === task._id ? { ...t, status: task.status } : t
        )
      );
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      // Call the API to delete the task
      await removeTodo(taskId);
      // Remove the task from the local state after deletion
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {}
  };

  const [, dropRef] = useDrop(() => ({
    accept: "task",
    drop: (item) => moveTask(item, status),
  }));

  return (
    <div
      ref={dropRef}
      className="flex flex-col w-full sm:w-80 p-4"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        {status.toUpperCase()}
      </h2>

      <div
        className="space-y-4 overflow-y-auto max-h-[calc(100vh-150px)] bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex-shrink-0"
      >
        {tasks?.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              handleDeleteTask={handleDeleteTask} // Pass down the delete handler
            />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300">No tasks in this column</p>
        )}
      </div>
    </div>
  );
};

export default Column;
