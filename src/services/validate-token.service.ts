import { Request, Response, NextFunction } from "express";
import { IValidateToken } from "../Interfaces/IValidate";
import jwt from "jsonwebtoken";

class ValidateTokenService {
  public async validate(req: any, res: any, next: any) {
    const headerToken = req.headers["authorization"];
    if (headerToken != undefined && headerToken.startsWith("Bearer ")) {
      try {
        const bearerToken = headerToken.slice(7);
        jwt.verify(bearerToken, process.env.SECRET_KEY || "pepe");
        bearerToken;
        next();
      } catch (error) {
        return res.status(401).json({
            msg: "no autorizado ",
          });
      }
    } else {
      return res.status(401).json({
        msg: "acceso denegado",
      });
    }
  }
}

export default ValidateTokenService;
