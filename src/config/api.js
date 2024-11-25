import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = "https://trycomai-kanban-backend.onrender.com/api"; // Replace with your actual API URL

// Fetch all todo
export const getAllTodos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/todo`);
        return response.data; // Return todo from the API response
    } catch (error) {
        console.error("Error fetching todo:", error);
        throw error; // Throw error to be handled in the calling component
    }
};

// Update the status of a specific todo
export const changeTodoStatus = async (todoId, newStatus) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/todo/${todoId}`, { status: newStatus });
        return response.data; // Return updated todo data
    } catch (error) {
        console.error("Error updating todo status:", error);
        throw error; // Throw error to be handled in the calling component
    }
};

// Create a new todo
export const addNewTodo = async (todoDetails) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/todo`, todoDetails);
        return response.data; // Return the created todo data
    } catch (error) {
        console.error("Error creating todo:", error);
        throw error; // Throw error to be handled in the calling component
    }
};

// Delete a todo
export const removeTodo = async (todoId) => {
    try {
        await axios.delete(`${API_BASE_URL}/todo/${todoId}`);
    } catch (error) {
        console.error("Error deleting todo:", error);
        throw error; // Throw error to be handled in the calling component
    }
};
