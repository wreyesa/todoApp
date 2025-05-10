import { useTasks } from "../context/TaskProvider";

function TaskCard({ task, onEdit }) {
  const { deleteTask, updateTask } = useTasks();

  return (
    <div className="bg-slate-300 rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-2">
        <button
          className="bg-red-500 text-white px-2 py-1 hover:bg-red-900 rounded-md"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
