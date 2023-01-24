import Roles from "../entities/Roles";
import { IRoles } from "../Interfaces/IRoles";

class RolService{
    public async addRol(reqBody: IRoles){
        const roles = new Roles();
        roles.idrol = reqBody.idrol;
        roles.namerol = reqBody.namerol;
        roles.state = reqBody.state;
        return await roles.save();
    }

    public async getRol(){
        //EL ':' SE UTILIZA PARA ASIGNAR UN TIPO DE DATO(YA SEA 'string','number','boolean',etc) A UNA VARIABLE.
        //QUE EN ESTE CASO, LA VARIABLE 'respuesta' SEA UN ARRAY DE TIPO 'IRoles'.
        let respuesta : IRoles[] = [];
        const roles = await Roles.find();
        roles.map((c) =>{
            let obj: IRoles = {idrol: c.idrol, namerol: c.namerol,state:c.state};
            respuesta.push(obj);
        });
        return respuesta;
    }
 
    public async getOneRole(idrol:number){
        //Obtenemos el 'id' del rol que vamos a obtener 
        const rol = await Roles.findOneBy({idrol: idrol});
        let respuesta: IRoles = {
            idrol: rol?.idrol,
            namerol: rol?.namerol,
            state:rol?.state
        };
        return respuesta;
    }

    public async updateRoles(idrol:number, reqBody: IRoles){
        const roles = await Roles.findOneBy({
            idrol:idrol
        });
        //SI NO HAY NINGUN ROL O ES NULL
        if(!roles) 
        //RETORNA UN ERROR CON EL MENSAJE "NO HAY ROL"
        return Promise.reject("NO HAY ESE ROL")
        //DE LO CONTRARIO SE ACTUALIZARÁ
        //Igualamos los atributos de la entidad 'roles' CON las entidades del reqBody que toma de la interfaz 'IRoles'
        roles.namerol = reqBody.namerol;
        roles.state = reqBody.state;

        roles.save();
        return roles;
    }


    public async deleteRoles(idrol:number){
        //Obtenemos el 'id' del rol que vamos a eliminar 
        const roles = await Roles.findOneBy({
            //Primero colocamos el nombre del 'id' que se encuentra en 
            //la entidad 'roles' y luego el nombre del parametro que hemos colcado, que en este caso es el mismo: 'idrol'
            idrol: idrol
        });

        //SI NO HAY NINGUN ROL O ES NULL
        if(!roles){
            return Promise.reject("NO HAY ROLES")
        //DE LO CONTRARIO 
        }else{
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
