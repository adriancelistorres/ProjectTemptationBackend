import{Request, Response} from "express";
import PruebaRol from "../services/pruebarol.service";
class PruebaController{
    public async getNameRoles(req: Request, res:Response){
        try {
            const service = new PruebaRol();
            const result = await service.GetViewRol();
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }
}

export default PruebaController