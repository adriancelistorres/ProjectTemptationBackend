import { IRoles} from "../Interfaces/IRoles";
import{Request, Response} from "express";
import RolService from "../services/rol.service";

class RolesController{
    //OBLIGATORIO COLOCAR Request -  Response COMO PARAMETROS DE LOS METODOS ASINCRONOS
    public async addRoles(req:Request, res:Response){
        try{
            const reqBody :IRoles = req.body;
            const service = new RolService();
            const result = await service.addRol(reqBody);
            return res.json(result);
        }catch(error){
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    //OBLIGATORIO COLOCAR Request -  Response COMO PARAMETROS DE LOS METODOS ASINCRONOS
    public async getRoles(req: Request ,res: Response){
        try {
            const service = new RolService();
            const result = await service.getRol();
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async getOneRol(req:Request, res: Response){
        try {
            const idrol: number = parseInt(req.params.idrol);
            const service = new RolService();
            const result = await service.getOneRole(idrol);
            return res.json(result)
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async updateRoles(req: Request, res:Response){
        try {
            const idrol: number = parseInt(req.params.idrol);
            const reqBody: IRoles = req.body;
            const service = new RolService();
            const result = await service.updateRoles(idrol,reqBody);
            return res.json(result)

        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async deleteRoles(req:Request, res:Response){

        try {
           const idrol: number = parseInt(req.params.idrol);
           const service = new RolService();
           const result = await service.deleteRoles(idrol);
           return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }  
}


export default RolesController