import { IPerson } from "../Interfaces/IPerson";
import { AppDataSource } from "../databases/db";
import Person from "../entities/Person";
import bcrypt from "bcrypt";

class PersonService {
  public async addPerson(username: string, reqBody: IPerson) {
    try {
      const data = await AppDataSource.createQueryBuilder()
        .select("person")
        .from(Person, "person")
        .where("person.username = :username", { username })
        // .andWhere("person.password = :password", { password })
        .getOne();
      // data?.dni==reqBody.dni &&
      if (data?.username != reqBody.username) {
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
        person.save();
        return data;
      } else {
        return data;
      }
    } catch (error) {
      return Promise.reject(" does not exist ");
    }
  }

  /*Metodo para Obtener todos los proveedores */
  public async getServicePerson() {
    let respuesta: IPerson[] = ([] = []);
    const person = await Person.find();
    person.map((b) => {
      let obj: IPerson = {
        idperson: b.idperson,
        idrol: b.idrol,
        name: b.name,
        lastname: b.lastname,
        date_b: b.date_b,
        dni: b.dni,
        gender: b.gender,
        address: b.address,
        username: b.username,
        password: b.password,
        state: b.state,
        key: b.key,
      };
      respuesta.push(obj);
    });
    return respuesta;
  }

  /*Metodo para Obtener una persona */
  public async getServiceOnePerson(idperson: number) {
    const person = await Person.findOneBy({ idperson: idperson });
    let respuesta: IPerson = {
      idperson: person?.idperson,
      idrol: person?.idrol,
      name: person?.name,
      lastname: person?.lastname,
      date_b: person?.date_b,
      dni: person?.dni,
      gender: person?.gender,
      address: person?.address,
      username: person?.username,
      password: person?.password,
      state: person?.state,
      key: person?.key,
    };
    return respuesta;
  }

  /* Metodo para actualizar un provevedor */
  public async UpdateServicePerson(username: string,idperson: number, reqBody: IPerson) {
    try {
      const data =  await AppDataSource.createQueryBuilder()
      .select("person")
      .from(Person, "person")
      .where("person.username = :username",{username})
      .getOne()
      if (data?.state!= reqBody.state) {
        const person = await Person.findOneBy({ idperson: idperson });

        if (!person) return Promise.reject("No se encontro Persona");
        const hashedPassword = await bcrypt.hash(reqBody.password, 8);
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
        person.save();
        return data;
      }
      if (data?.username != reqBody.username) {
        const person = await Person.findOneBy({ idperson: idperson });

        if (!person) return Promise.reject("No se encontro Persona");
        const hashedPassword = await bcrypt.hash(reqBody.password, 8);
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
        person.save();
        return data;
      } else {
        return data;
      }
    } catch (error) {
      return Promise.reject(" does not update ");
    }
  }

  /*Metodo para Eliminar un provevedor */
  public async deleteServicePerson(idperson: number) {
    const person = await Person.findOneBy({ idperson: idperson });
      const error ={
        msg: "No EXISTE ESTA PERSONA"
      }

    if (!person) {
      return error;
    } else {
      person.state = 0;
      person.save();
      return person;
    }
  }
}
export default PersonService;
