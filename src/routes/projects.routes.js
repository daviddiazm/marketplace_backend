import { Router } from "express";
import { getProjects, createProject, updateProject, deleteProject, getOneProject, getProjectTasks } from "../controllers/projects.controller.js";
const router = Router();

router.get('/projects', getProjects);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.get('/projects/:id', getOneProject);

router.get('/projects/:id/tasks', getProjectTasks);


export default router;