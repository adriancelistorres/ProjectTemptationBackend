import { Request, Response } from "express";
import { VhorarioDocente } from "../entities/VhorarioDocente";
import {
 Ihoradocente
} from "../Interfaces/IVhorarioDocente";
import VhorarioDocenteService from "../services/vhorario.service";

class vhorariocontroller{

// public async getHorarioDocente  (req: Request, res: Response) {
//   try {
//     const service = new VhorarioDocenteService();
//     const result=await service.getServiceVhorarioDocente()
//     return res.json(result);
//   } catch (error) {
//     if (error instanceof Error) {
//       return res.status(500).json({ message: error.message });
//     }
//   }
// };

public async getOneHorario(req: Request, res: Response) {
  try {
    const id:number=parseInt(req.params.id);

    const reqBody: Ihoradocente = req.body;
    const service = new VhorarioDocenteService();
    const result = await service.getOneHorario(id);
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}


}

export default vhorariocontroller;