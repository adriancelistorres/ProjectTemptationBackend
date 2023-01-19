
import { Request, Response } from "express";

import VasistenciaService from "../services/vasistencia.service";
import VinasistenciaService from "../services/vinasistencia.service";
import VtardanzaService from "../services/vtardanza.service";

class vtardanzacontroller{

    public async getTardanza(req: Request, res: Response) {
      try {
        const service = new VtardanzaService();
        const result=await service.getServiceTardanza()
        return res.json(result);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
    };

    
    }
    
    export default vtardanzacontroller;