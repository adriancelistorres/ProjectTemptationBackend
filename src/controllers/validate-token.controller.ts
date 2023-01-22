import { Request,Response,NextFunction } from "express";
import ValidateTokenService from "../services/validate-token.service";

class ValidateToken{
    public async Token(req:Request,res:Response,next:NextFunction){
        const service= new ValidateTokenService();
        const result=await service.validate(req,res,next)
        return result

    }
}
export default ValidateToken