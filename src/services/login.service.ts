import { Usuario } from "../entities/Usuario";
import { AppDataSource } from "./../databases/db";

class LoginService {
  constructor() {}

  public async Login(usuario: string, contrasena: string) {
    console.log("LOGservice", usuario, contrasena);

    try {
      const data = await AppDataSource.createQueryBuilder()
        .select("user")
        .from(Usuario, "user")
        .where("user.usuario = :usuario", { usuario })
        .andWhere("user.contrasena = :contrasena", { contrasena })
        .getOne();
      // console.log("LOG1", data);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return Promise.reject(" does not exist ");
      }
    }
  }
}

export default LoginService;
