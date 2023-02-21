import { IStyles } from "../Interfaces/IStyles";
import{Request, Response} from "express";
import StyleService from "../services/style.service";

class StylesController{

    public async addStyles(req: Request, res:Response){
        try {
            //EL CUERPO DE LA SOLICITUD(reqBody) VA A SER DE TIPO 'IStyles'
            const reqBody: IStyles = req.body;
            const service = new StyleService();
            const result = await service.addStyle(reqBody.name_sty,reqBody);
            
            if (result?.name_sty === reqBody.name_sty) {
                //RETORNA UN CODIGO DE ESTADO '400'(Bad Request) Y EN EL POSTMAN COLOCA UN MENSAJE EN FORMATO JSON
                return res.status(400).json({
                    msg: `Ya se agrego anteriormente`,
                  })
            } 
            //DE LO CONTRARIO, RETORNA UN CODIGO DE ESTADO '200'(ok), Y  EN EL POSTMAN COLOCA UN MENSAJE EN FORMATO JSON
            //SI EL 'result' ES NULL INGRESARÁ AL ELSE      
            else {
                return res.status(200).json({
                    msg: `Se agrego correctamente`,
                  })
            }


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
            const result = await service.updateStyle(reqBody.name_sty,idstyles,reqBody);
            // return res.json(result);

            if(result?.state!=reqBody.state){
                return res.status(200).json({
                    msg: `activo`,
                  })
            }
            if(result?.name_sty===reqBody.name_sty){
                return res.status(400).json({
                    msg: `Ya se agrego anteriormente`,
                  })}
            else{
                return res.status(200).json({
                    msg: `Se agrego correctamente`,
                  })
            }

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

