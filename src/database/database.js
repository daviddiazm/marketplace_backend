import Sequelize from "sequelize";

export const sequelize = new Sequelize('marketplace_db','postgres','root',{
  host: 'localhost',
  dialect: 'postgres'
});
