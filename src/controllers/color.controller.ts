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

    public async getColor(req: Request, res:Response){
        try {
            const service = new ColorService();
            const result = await service.getColor();
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async getOneColor(req: Request, res:Response){
        try {
            const idcolor: number = parseInt(req.params.idcolor);
            const service = new ColorService();
            const result = await service.getOneColor(idcolor);
            return res.json(result)
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async updateColor(req: Request, res: Response){
        try {
            const idcolor: number = parseInt(req.params.idcolor);
            const reqBody: IColor = req.body;
            const service = new ColorService();
            const result = await service.updateColor(idcolor,reqBody);
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async deleteColor(req:Request , res: Response){
        try {
            const idcolor: number = parseInt(req.params.idcolor);
            const service = new ColorService();
            const result = await service.deleteColor(idcolor);
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