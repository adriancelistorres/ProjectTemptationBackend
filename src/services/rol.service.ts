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
}

export default RolService
