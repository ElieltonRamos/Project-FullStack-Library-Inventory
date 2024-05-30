import { Options } from 'sequelize';
const pg = require('pg');

const config: Options = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'library_inventory',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
  dialectModule: pg,
  logging: false,
};

export = config;
