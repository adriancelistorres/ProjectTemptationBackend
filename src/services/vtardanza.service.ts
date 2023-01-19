import { IVasistencia } from "../Interfaces/IVasistencia";
import { Vinasistencia } from "../entities/Vinasistencia";
import { IVinasistencia } from "../Interfaces/IVinasistencia";
import { IVtardanza } from "../Interfaces/IVtardanza";
import { Vtardanza } from "../entities/Vtardanza";

class VtardanzaService {
    constructor() {}
   
    public async getServiceTardanza() {
      let respuesta: IVtardanza[] = [];
      const countries = await Vtardanza.find();
      countries.map((c) => {
        let obj: IVasistencia = { idasistencia:c.idasistencia,nombre:c.nombre,apellido:c.apellido,observacion:c.observacion,fh_asistencia:c.fh_asistencia };
        respuesta.push(obj);
      });
      return respuesta;
    }
   
  }
  
  export default VtardanzaService;