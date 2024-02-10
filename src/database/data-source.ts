import { DataSource } from "typeorm";
import { Driver, Rider, User } from "../models";
require("dotenv").config();

const dbName = process.env.db_name as string;
const dbUser = process.env.db_user as string;
const dbPassword = process.env.db_password;
const dbHost = process.env.db_host;

const AppDataSource = new DataSource({
  type: "postgres",
  host: dbHost,
  port: 5432,
  username: dbUser,
  password: dbPassword,
  database: dbName,
  logging: "all",
  ssl: true,
  entities: [Rider, Driver, User],
  //Dev --
  //synchronize: true
});


export { AppDataSource };
