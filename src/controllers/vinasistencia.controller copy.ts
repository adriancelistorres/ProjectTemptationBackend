
import { Request, Response } from "express";

import VasistenciaService from "../services/vasistencia.service";
import VinasistenciaService from "../services/vinasistencia.service";

class vinasistenciacontroller{

    public async getInasistencia (req: Request, res: Response) {
      try {
        const service = new VinasistenciaService();
        const result=await service.getServiceVinasistencia()
        return res.json(result);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
    };

    
    }
    
    export default vinasistenciacontroller;