import { IPerson } from "../Interfaces/IPerson";
import { AppDataSource } from "../databases/db";
import Person from "../entities/Person";
import bcrypt from "bcrypt";

class PersonService {
  public async addPerson(reqBody: IPerson) {
    try {
      const hashedPassword = await bcrypt.hash(reqBody.password, 8);
      const person = new Person();
      person.idrol = reqBody.idrol;
      person.name = reqBody.name;
      person.lastname = reqBody.lastname;
      person.date_b = reqBody.date_b;
      person.dni = reqBody.dni;
      person.gender = reqBody.gender;
      person.address = reqBody.address;
      person.username = reqBody.username;
      person.password = hashedPassword;
      person.state = reqBody.state;
      person.key = reqBody.key;
      return await person.save();
    
    } catch (error) {
      return Promise.reject(" does not exist ");
    }
  }
}
export default PersonService;
