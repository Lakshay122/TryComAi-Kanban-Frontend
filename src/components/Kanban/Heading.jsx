import { Plus } from "lucide-react"; // Import the Plus icon from Lucide React

const KanbanBoardHeader = ({ openModal }) => {
  return (
    <div className="text-center mb-8 flex items-center flex-col">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
        TryCom AI Kanban Board
      </h1>

      {/* Create Task Button with Plus Icon */}
      <button
        onClick={openModal}
        className="flex min-w-max items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-5 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        <Plus className="w-6 h-6 mr-2" /> {/* Plus Icon */}
        <span className="font-semibold">Create Task</span>
      </button>
    </div>
  );
};

export default KanbanBoardHeader;
