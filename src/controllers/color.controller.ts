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
            //DEPENDIENDO DEL RESULTADO EN EL 'color.service', LA CONSTANTE 'result' ALMACENARA EL NUEVO COLOR Q SE HA AÑADIDO O ALMACENARA LA VARIABLE 'data' PORQUE HA SIDO RETORNADA DESDE 'color.service'
            
            const result = await service.addColor(reqBody.name_col,reqBody)
            //CON LA VARIABLE 'result' PODEMOS ACCEDER A CUALQUIER PROPIEDAD DE TIPO 'Color'
            //SI EL NOMBRE DEL COLOR QUE SE ENCUENTRA ALMACENADO EN LA CONSTANTE 'result' ES IGUAL AL NOMBRE DEL COLOR QUE SE ENCUENTRA EN EL 'reqBody' DE TIPO INTERFAZ 'Icolor'.
            if (result?.name_col === reqBody.name_col) {
                //RETORNA UN CODIGO DE ESTADO '400'(Bad Request) Y EN EL POSTMAN COLOCA UN MENSAJE EN FORMATO JSON
                return res.status(400).json({
                    msg: `Ya se agrego anteriormente`,
                  })
            } 
            //DE LO CONTRARIO, RETORNA UN CODIGO DE ESTADO '200'(ok), Y  EN EL POSTMAN COLOCA UN MENSAJE EN FORMATO JSON          
            else {
                return res.status(200).json({
                    msg: `Se agrego correctamente`,
                  })
            }
            //ANTERIORMENTE, RETORNABA LA CONSTANTE 'result' EN FORMATO JSON EL CUAL SE PODIA VISUALIZAR EN EL POSTMAN
            //return res.json(result);
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