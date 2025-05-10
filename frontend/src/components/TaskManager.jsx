// src/pages/TaskManager.jsx
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskProvider";
import TaskCard from "../components/TaskCard";

function TaskManager() {
  const { tasks, loadTasks, createTask, updateTask } = useTasks();
  const [editingTask, setEditingTask] = useState(null);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <Formik
        initialValues={editingTask || task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (editingTask) {
            await updateTask(editingTask.id, values);
            
            setEditingTask(null); // salimos del modo edición
          } else {
            await createTask(values);
          }
          
          await loadTasks();
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 rounded-md p-4 mb-6"
          >
            <h1 className="text-xl font-bold text-center mb-4">
              Crea tu tarea
            </h1>

            <label className="block mb-1">Título</label>
            <input
              type="text"
              name="title"
              placeholder="Escribe un título"
              onChange={handleChange}
              value={values.title}
              className="w-full px-3 py-2 rounded-md mb-4 bg-white"
            />

            <label className="block mb-1">Descripción</label>
            <textarea
              name="description"
              rows={3}
              placeholder="Escribe una descripción"
              onChange={handleChange}
              value={values.description}
              className="w-full px-3 py-2 rounded-md mb-4 bg-white"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-900"
            >
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>

      <h2 className="text-2xl font-bold text-white text-center mb-4">
        Lista de Tareas
      </h2>

      {tasks.length === 0 ? (
        <p className="text-white text-center">No hay tareas aún</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} onEdit={setEditingTask}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskManager;
