import { IColor } from "../Interfaces/IColor";
//IMPORTAR LA LIBRERIA 'express' PARA EL USO DE REQUEST Y RESPONSE
import{Request, Response} from "express";
import ColorService from "../services/color.service";

class ColorController{

    //OBLIGATORIO COLOCAR Request -  Response COMO PARAMETROS DE LOS METODOS ASINCRONOS
    public async addColor(req: Request, res:Response){
        try {
            const reqBody :IColor = req.body;
            const service = new ColorService();
            const result = await service.addColor(reqBody)
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }
}

export default ColorController;