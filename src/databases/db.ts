import { DataSource } from "typeorm";
import { DB_HOST, DB_USER, DB_PORT,DB_PASSWORD, DB_DATABASE } from '../config/config';
import Category from "../entities/Category";
import Color from "../entities/Color";
import Person from "../entities/Person";
import Roles from "../entities/Roles";
import Size from "../entities/Size";
import Brand from "../entities/Brand";
import Provider from "../entities/Provider";
import PaymentMethod from "../entities/PaymentMethod";
<<<<<<< HEAD
import Income from "../entities/Income";
=======
import Order from "../entities/Order";
import SaleDetail from "../entities/Sale_Detail";

>>>>>>> ded113645aa8569f02dfb285275a917230fb4ada


/*import Products from "../entities/Products";*/

import Styles from "../entities/Styles";



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
<<<<<<< HEAD
  entities: [Roles,Person,Category,Size,Color,Brand,Provider,PaymentMethod,Styles,Income],
=======
  entities: [Roles,Person,Category,Size,Color,Brand,Provider,PaymentMethod,Styles,Order,SaleDetail],
>>>>>>> ded113645aa8569f02dfb285275a917230fb4ada
  subscribers: [],
  migrations: [],
});
