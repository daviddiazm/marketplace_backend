import { DataTypes, INTEGER } from "sequelize";
import { sequelize } from "../database/database.js";

const User = sequelize.define("users", {
  id : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  }
})

export default User;