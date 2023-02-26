import { Request, Response } from "express";
import { IPerson } from "../Interfaces/IPerson";
import PersonService from "../services/person.service";
import bcrypt from 'bcrypt'
import { AppDataSource } from "../databases/db";
import Person from "../entities/Person";

class PersonController{
    public async addPerson(req:Request,res:Response){
        try {

            const reqBody:IPerson=req.body;
            const service=new PersonService();
            const result=await service.addPerson(reqBody.username,reqBody);
           
        
            //return res.json(result)
            if (result?.username ===reqBody.username) {
                return res.status(400).json({
                    msg: "Ya se agrego anteriormente"
                })
            } else {
                return res.status(200).json({
                    msg: "Se agrego correctamente"
                })
            }

        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }

    
    }

    public async getPerson(req: Request, res: Response){
        try {
            const service = new PersonService();
            const result =  await service.getServicePerson();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async getOnePerson(req: Request, res: Response){
        try {
            const idperson: number = parseInt(req.params.idperson)
            const service =  new PersonService();
            const result =  await service.getServiceOnePerson(idperson);
            return res.json(result);

        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }
    public async UpdatePerson(req: Request, res: Response){
        try {
            const idperson: number =  parseInt(req.params.idperson);
            const resBody:IPerson = req.body;
            const service = new PersonService();
            const result = await service.UpdateServicePerson(resBody.username,idperson,resBody);
            //return res.json(result)
            if (result?.state !=resBody.state) {
                return res.status(200).json({
                    msg: "Activo",
                })
            }

            if(result?.username===resBody.username){
                return res.status(400).json({
                    msg: "Ya se agrego anteriormente",
                })
            }else{
                return res.status(200).json({
                    msg: "Se agrego correctamente",
                })
            }
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
               }
        }
    }



    public async deletePerson(req: Request, res: Response){
        try {
            const idperson: number =  parseInt(req.params.idperson);
            const service =  new PersonService();
            const result =  await service.deleteServicePerson(idperson);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }

}
export default PersonController