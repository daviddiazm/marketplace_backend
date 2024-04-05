import app from "./app.js";
import { sequelize } from "./database/database.js";


async function main() {
  try {
    app.listen(3000);
    console.log('servidor escuchando en el puerto: ', 3000);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();


