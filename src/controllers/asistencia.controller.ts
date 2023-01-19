import AsistenciaService from "../services/asistencia.service";
import { Request, Response } from "express";
import { IAsistencia } from "../Interfaces/IAsistencia";


class AsistenciaController {
    constructor() {}
  
    public async AsistenciaDocente(req: Request, res: Response) {
      try {
        const id:number=parseInt(req.params.id);

        const asis = req.body;
        const service = new AsistenciaService();
        const result = await service.asistencia(id);
        // console.log("LOG RESULT", result);
        return res.json(result);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
    }

    public async createAsistencia(req: Request, res: Response) {
        try {
          const reqBody: IAsistencia = req.body;
          const service = new AsistenciaService();
          const result = await service.createAsistencia(reqBody);
          return res.json(result);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }
        }
      }
  }

  export default AsistenciaController;
