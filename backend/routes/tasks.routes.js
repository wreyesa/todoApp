import { Router } from "express";
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

// Aqui vamos a crear todas las rutas relacionadas a las tareas, todos los CRID q serian crear, eliminar, actualizar y listar.

// permitira solicitar todas las tareas
router.get("/tasks", getTasks);

// para obtener una unica tarea a partir de un id
router.get("/tasks/:id", getTask);

// sirve para crear tareas
router.post("/tasks", createTask);

// actualiza los campos (title, description, done) de una tarea
router.put("/tasks/:id", updateTask);

// sirve para eliminar
router.delete("/tasks/:id", deleteTask);

export default router;
