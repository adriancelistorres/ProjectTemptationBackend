import { IVasistencia } from "../Interfaces/IVasistencia";
import { Vinasistencia } from "../entities/Vinasistencia";
import { IVinasistencia } from "../Interfaces/IVinasistencia";

class VinasistenciaService {
    constructor() {}
   
    public async getServiceVinasistencia() {
      let respuesta: IVinasistencia[] = [];
      const countries = await Vinasistencia.find();
      countries.map((c) => {
        let obj: IVasistencia = { idasistencia:c.idasistencia,nombre:c.nombre,apellido:c.apellido,observacion:c.observacion,fh_asistencia:c.fh_asistencia };
        respuesta.push(obj);
      });
      return respuesta;
    }
   
  }
  
  export default VinasistenciaService;