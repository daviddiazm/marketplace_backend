import { Router } from "express";
import { createTask, deleteTask, getOneTask, getTasks, updateTask } from "../controllers/tasks.controller.js";
const router = Router()

router.get("/tasks", getTasks)
router.post("/tasks", createTask)
router.delete("/tasks/:id", deleteTask)
router.put("/tasks/:id", updateTask)
router.get("/tasks/:id", getOneTask)

export default router