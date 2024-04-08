import Project from "./Project.js";
import Task from "./Task.js";
import User from "./User.js";



Task.belongsTo(Project);
Project.hasMany(Task);

User.belongsToMany(Project, { through: 'UsersProjects' })
Project.belongsToMany(User, { through: 'UsersProjects' })