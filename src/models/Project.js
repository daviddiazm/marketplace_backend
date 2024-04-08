import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";



const Project = sequelize.define('projects', {
  id : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name : {
    type: DataTypes.STRING,
  },
  priority : {
    type: DataTypes.INTEGER
  },
  descirpion : {
    type: DataTypes.STRING
  }
})

export default Project
