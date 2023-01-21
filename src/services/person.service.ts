import { IPerson } from "../Interfaces/IPerson";
import Person from "../entities/Person";

class PersonService {

  public async addPerson(reqBody: IPerson) :Promise<Person>{

    const person = new Person();
    person.idrol = reqBody.idrol;
    person.name = reqBody.name;
    person.lastname = reqBody.lastname;
    person.date_b = reqBody.date_b;
    person.dni = reqBody.dni;
    person.gender = reqBody.gender;
    person.address = reqBody.address;
    person.username = reqBody.username;
    person.password = reqBody.password;
    person.state = reqBody.state;
    person.key = reqBody.key;

    return await person.save();
  }
}
export default PersonService;
