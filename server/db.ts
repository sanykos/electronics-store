import { Sequelize } from 'sequelize';

module.exports = new Sequelize(
  process.env.DB_NAME || 'electronics_store',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
  },
);
