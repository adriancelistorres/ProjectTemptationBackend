import { DataSource } from "typeorm";

import { Usuario } from "../entities/Usuario";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "user",
  password: "password",
  database: "temptationBD",
  // synchronize: true,
  logging: false,
  entities: [Usuario],
  subscribers: [],
  migrations: [],
});
