import { Request, Response } from "express";
import LoginService from "../services/login.service";
import bcrypt from "bcrypt";
import { DB_HOST,SECRET_KEY, DB_USER, DB_PORT,DB_PASSWORD, DB_DATABASE } from '../config/config';


import jwt from 'jsonwebtoken'
import { AppDataSource } from "../databases/db";
import Person from "../entities/Person";
class LoginController {
  constructor() {}

  public async login(req: Request, res: Response) {
    try {
      const reqBody = req.body;
      const service = new LoginService();
      const result = await service.Login(reqBody.username);
      // console.log("LOG RESULT", result);
      const pass: string | any = result?.password;
      if (result?.username == reqBody.username && reqBody.password != null) {
          bcrypt.compare(reqBody.password, pass).then((endP) => {
          console.log(endP);
          if (endP == true) {
            const token=jwt.sign({
              idrol:result?.idrol,
              username:result?.username,
              password:result?.password,
            },process.env.SECRET_KEY||'pepe')
            return res.json(token);
          } else {
            return res.jsonp("contraseña incorrecta");
          }
        });
      } else {
        return res.jsonp("usuario no encontrado");
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
}
export default LoginController;
