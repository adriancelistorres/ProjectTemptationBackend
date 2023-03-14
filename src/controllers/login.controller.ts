import { Request, Response } from "express";
import LoginService from "../services/login.service";
import bcrypt from "bcrypt";
import {
  DB_HOST,
  SECRET_KEY,
  DB_USER,
  DB_PORT,
  DB_PASSWORD,
  DB_DATABASE,
} from "../config/config";

import jwt from "jsonwebtoken";
import { AppDataSource } from "../databases/db";
import Person from "../entities/Person";
class LoginController {
  constructor() {}

  public async login(req: Request, res: Response) {
    try {
      const reqBody = req.body;
      const service = new LoginService();
      const result = await service.Login(reqBody.username);
      // console.log("LOG RESULT", result?.idrol);
      const pass: string | any = result?.password;
      if (result?.username == reqBody.username && reqBody.password != null) {
        if (result?.idrol == 1) {
          bcrypt.compare(reqBody.password, pass).then((endP) => {
            console.log(endP);
            if (endP == true) {
              const token = jwt.sign(
                {
                  idrol: result?.idrol,
                  username: result?.username,
                  password: result?.password,
                  rol:result.idrol
                  
                },
                process.env.SECRET_KEY || "pepe"
              );
              return res.json({ token: token });
            } else {
              return res.status(400).json({
                msg: `contraseña incorrecta`,
              });
            }
          });
        }else{
           return res.status(400).json({
                msg: `usuario no permitido`,
              });
        }
      } else {
        return res.status(400).json({
          msg: `usuario no encontrado`,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
}
export default LoginController;
