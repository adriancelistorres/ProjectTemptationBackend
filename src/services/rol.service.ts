import { AppDataSource } from "../databases/db";
import Roles from "../entities/Roles";
import { IRoles } from "../Interfaces/IRoles";

class RolService {
  public async addRol(namerol: string, reqBody: IRoles) {
    try {
      const data = await AppDataSource.createQueryBuilder()
        .select("rol")
        .from(Roles, "rol")
        .where("rol.namerol = :namerol", { namerol })
        .getOne();
      if (data?.namerol != reqBody.namerol) {
        const rol = new Roles();
        rol.idrol = reqBody.idrol;
        rol.namerol = reqBody.namerol;
        rol.state = reqBody.state;
        rol.save();
        return data;
      } else {
        return data;
      }
    } catch (error) {
      return Promise.reject(" does not exist ");
    }
  }

  public async getRol() {
    //EL ':' SE UTILIZA PARA ASIGNAR UN TIPO DE DATO(YA SEA 'string','number','boolean',etc) A UNA VARIABLE.
    //QUE EN ESTE CASO, LA VARIABLE 'respuesta' SEA UN ARRAY DE TIPO 'IRoles'.
    let respuesta: IRoles[] = [];
    const roles = await Roles.find();
    roles.map((c) => {
      let obj: IRoles = { idrol: c.idrol, namerol: c.namerol, state: c.state };
      respuesta.push(obj);
    });
    return respuesta;
  }

  public async getOneRole(idrol: number) {
    //Obtenemos el 'id' del rol que vamos a obtener
    const rol = await Roles.findOneBy({ idrol: idrol });
    let respuesta: IRoles = {
      idrol: rol?.idrol,
      namerol: rol?.namerol,
      state: rol?.state,
    };
    return respuesta;
  }

  public async updateRoles(namerol: string, idrol: number, reqBody: IRoles) {
    try {
      const roles = await Roles.findOneBy({
        idrol: idrol,
      });
      const data = await AppDataSource.createQueryBuilder()
        .select("rol")
        .from(Roles, "rol")
        .where("rol.namerol = :namerol", { namerol })
        .getOne();
      if (data?.state != reqBody.state) {
        if (!roles) return Promise.reject("No hay Marca");

        roles.namerol = reqBody.namerol;
        roles.state = reqBody.state;
        roles.save();
        return data;
      }

      if (data?.namerol != reqBody.namerol) {
        if (!roles) return Promise.reject("No hay Marca");

        roles.namerol = reqBody.namerol;
        roles.state = reqBody.state;

        roles.save();
        return data;
      } else {
        return data;
      }
    } catch (error) {
        return Promise.reject(" does not update ");
    }
  }

  public async deleteRoles(idrol: number) {
    //Obtenemos el 'id' del rol que vamos a eliminar
    const roles = await Roles.findOneBy({
      //Primero colocamos el nombre del 'id' que se encuentra en
      //la entidad 'roles' y luego el nombre del parametro que hemos colcado, que en este caso es el mismo: 'idrol'
      idrol: idrol,
    });
    const error = {
        msg: "NO EXISTE ESE MARCA",
      };
      

    //SI NO HAY NINGUN ROL O ES NULL
    if (!roles) {
        return error;
      //DE LO CONTRARIO
    } else {
      //CAMBIARÁ EL ESTADO DE ROLES A '0'
      roles.state = 0;
      //GUARDA LOS CAMBIOS
      roles.save();
      //RETORNA LA VARIABLE 'roles'
      return roles;
    }
  }
}

export default RolService;
