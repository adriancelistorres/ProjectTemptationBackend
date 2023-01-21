import { DataSource } from "typeorm";
import { Usuario } from "../entities/Usuario";
import { DB_HOST, DB_USER, DB_PORT,DB_PASSWORD, DB_DATABASE } from '../config/config';
import Person from "../entities/Person";

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
  entities: [Usuario,Person],
  subscribers: [],
  migrations: [],
});
