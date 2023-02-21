import{Request, Response} from "express";
import { IInput } from "../Interfaces/IInput";
import InputService from "../services/input.service";

class InputController{

    public async addInput(req: Request, res:Response){
        try {
            const reqBody: IInput =req.body;
            const service = new InputService();
            const result = await service.addServiceInput(reqBody);
            return res.json(result);
            
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
            
        }
        
    }

    public async getInput(req: Request, res:Response){

        try {

            const service = new InputService();
            const result = await service.getServiceInput();
            return res.json(result);

        } catch (error) {

            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async getOneInput(req:Request, res:Response){
        try{
            const idinput: number = parseInt(req.params.idinput);
            const service = new InputService();
            const result = await service.getServiceOneInput(idinput);
            return res.json(result);
        }catch(error){
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }

    }

    public async updateInput(req: Request, res:Response){
        try {
            const idinput: number = parseInt(req.params.idinput);
            const reqBody: IInput = req.body;
            const service = new InputService();
            const result = await service.updateServiceInput(idinput,reqBody);
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

}

export default InputController;