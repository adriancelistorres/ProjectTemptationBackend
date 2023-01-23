import { DataSource } from "typeorm";
import { DB_HOST, DB_USER, DB_PORT,DB_PASSWORD, DB_DATABASE } from '../config/config';
import Brand from "../entities/Brand";
import Category from "../entities/Category";
import Person from "../entities/Person";
import Roles from "../entities/Roles";

const PORT:any=DB_PORT
export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  // synchronize: true,
  logging: false,
  entities: [Roles,Person,Category,Brand],
  subscribers: [],
  migrations: [],
});
