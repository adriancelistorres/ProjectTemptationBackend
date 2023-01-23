import { IRoles } from "../Interfaces/IRoles";
import{Request, Response} from "express";
import RolService from "../services/rol.service";

class RolesController{
    public async addRoles(req:Request, res:Response){
        const reqBody :IRoles = req.body;
        const service = new RolService();
        const result = await service.addRol(reqBody);
        return res.json(result);
    }
}

export default RolesController