import express from "express";
import  porjectsRoutes  from "./routes/projects.routes.js";
import  tasksRoutes  from "./routes/tasks.routes.js";
import  usersRoutes  from "./routes/users.routes.js";

const app = express();

app.use(express.json())

app.use(porjectsRoutes)
app.use(tasksRoutes)
app.use(usersRoutes)

export default app;
