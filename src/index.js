import app from "./app.js";
import { sequelize } from "./database/database.js";

import "./models/Project.js";
import "./models/Task.js";
import "./models/User.js"
import "./models/associations.js"

async function main() {
  try {
    await sequelize.sync()
    app.listen(3000);
    console.log('servidor escuchando en el puerto: ', 3000);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
