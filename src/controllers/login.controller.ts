import { Request, Response } from "express";

import { ILoginUsuario } from "../Interfaces/ILoginUsuario";
import LoginService from "../services/login.service";

class LoginController {
  constructor() {}

  public async loginUser(req: Request, res: Response) {
    try {
      const user = req.body;
      const service = new LoginService();
      const result = await service.Login(user.usuario, user.contrasena);
      // console.log("LOG RESULT", result);
      return res.json(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
}
export default LoginController;
