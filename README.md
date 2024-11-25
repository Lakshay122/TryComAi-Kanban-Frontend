# TryCom Assignment

This project is a task manager built with Vite and TailwindCSS. It allows users to organize tasks by dragging and dropping them between different columns (To-Do, In-Progress, and Completed).

## Features

- Drag and drop tasks
- Modern build setup using Vite

## Technologies Used

- [React](https://reactjs.org/) for building user interfaces
- [Vite](https://vitejs.dev/) for fast build and development
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS styling
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) for drag-and-drop functionality

## Setup

1. Clone the repository and install the dependencies

```bash
git clone <repository-url>
cd porject-dir
npm install
npm run dev
```



## Drag-and-Drop Workout Flow
- **Add Tasks**: Users can add tasks to their to-do list by dragging and dropping them into the "To-Do" column from a list of available tasks.
- **Move Tasks**: Users can move tasks between the columns as their progress changes:
  - Drag tasks from "To-Do" to "In-Progress" when starting them.
  - Drag tasks from "In-Progress" to "Completed" once finished.
  - Users can freely drag and drop tasks into any of the three columns ("To-Do", "In-Progress", or "Completed") as needed based on the task's status.
- **Remove Tasks**: Users can remove tasks by dragging them out of the columns or to a designated "Remove" area, effectively deleting them from the task list.



## Dependencies
- react
- axios
- lucide-react
- react-dnd
