import { Router } from "express";
import { createUser, deleteUser, getOneUser, getUsers, setUsersProjects, updateUser } from "../controllers/users.controllers.js";

const router = Router();

router.get('/users', getUsers)
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)
router.get('/users/:id', getOneUser)

router.post('/users/:id/projects', setUsersProjects)

export default router

