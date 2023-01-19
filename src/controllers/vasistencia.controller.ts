
import { Request, Response } from "express";

import VasistenciaService from "../services/vasistencia.service";

class vasistenciacontroller{

    public async getAsistencia (req: Request, res: Response) {
      try {
        const service = new VasistenciaService();
        const result=await service.getServiceVasistencia()
        return res.json(result);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
    };

    
    }
    
    export default vasistenciacontroller;