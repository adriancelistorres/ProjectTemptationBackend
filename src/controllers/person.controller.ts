import { Request, Response } from "express";
import { IPerson } from "../Interfaces/IPerson";
import PersonService from "../services/person.service";

class PersonController{
    public async addPerson(req:Request,res:Response){
        try {
            const reqBody:IPerson=req.body;
            const service=new PersonService();
            const result=await service.addPerson(reqBody);
            return res.json(result)

        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
        }
    }
}
}
export default PersonController