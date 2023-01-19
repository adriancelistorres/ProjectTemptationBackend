import TardanzaService from "../services/tardanza.service";
import { Request, Response } from "express";

class TardanzaController {
    constructor() {}
  
    public async TardanzaDocente(req: Request, res: Response) {
      try {
        const id:number=parseInt(req.params.id);

        const tard = req.body;
        const service = new TardanzaService();
        const result = await service.tardanza(id);
        // console.log("LOG RESULT", result);
        return res.json(result);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
    }
  }

export default TardanzaController