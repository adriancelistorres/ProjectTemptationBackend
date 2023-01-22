import { IPerson } from "../Interfaces/IPerson";
import Person from "../entities/Person";
import  Roles  from "../entities/Roles";
import { AppDataSource } from "./../databases/db";
import bcrypt from "bcrypt";

class LoginService {
  constructor() {}
  public async Login(username:string) {
    // console.log("LOGservice", username, password);
    try {
      const data = await AppDataSource.createQueryBuilder()
        .select("person")
        .from(Person, "person")
        .where("person.username = :username", { username })
        // .andWhere("person.password = :password", { password })
        .getOne();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return Promise.reject(" does not exist ");
      }
    }
  }
  
  // public comparacion(password:string,hash:string){
  //   return bcrypt.compare(password, hash)

  // }
}

export default LoginService;
