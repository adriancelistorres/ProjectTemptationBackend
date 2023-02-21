import { IStyles } from "../Interfaces/IStyles";
import{Request, Response} from "express";
import StyleService from "../services/style.service";

class StylesController{

    public async addStyles(req: Request, res:Response){
        try {
            //EL CUERPO DE LA SOLICITUD(reqBody) VA A SER DE TIPO 'IStyles'
            const reqBody: IStyles = req.body;
            const service = new StyleService();
            const result = await service.addStyle(reqBody);
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async getStyles(req: Request, res:Response){

        try {

            const service = new StyleService();
            const result = await service.getStyle();
            return res.json(result);

        } catch (error) {

            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async getOneStyle(req:Request, res:Response){
        try{
            const idstyles: number = parseInt(req.params.idstyles);
            const service = new StyleService();
            const result = await service.getOneStyle(idstyles);
            return res.json(result);
        }catch(error){
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }

    }

    public async updateStyle(req: Request, res:Response){
        try {
            const idstyles: number = parseInt(req.params.idstyles);
            const reqBody: IStyles = req.body;
            const service = new StyleService();
            const result = await service.updateStyle(idstyles,reqBody);
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async deleteStyle(req: Request, res:Response){
        try {
            const idstyles: number = parseInt(req.params.idstyles);
            const service = new StyleService();
            const result = await service.deleteStyle(idstyles);
            return res.json(result)
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

}

export default StylesController;

