import { IVasistencia } from "../Interfaces/IVasistencia";
import { Vasistencia } from "../entities/Vasistencia";

class VasistenciaService {
    constructor() {}
   
    public async getServiceVasistencia() {
      let respuesta: IVasistencia[] = [];
      const countries = await Vasistencia.find();
      countries.map((c) => {
        let obj: IVasistencia = { idasistencia:c.idasistencia,nombre:c.nombre,apellido:c.apellido,observacion:c.observacion,fh_asistencia:c.fh_asistencia };
        respuesta.push(obj);
      });
      return respuesta;
    }
   
  }
  
  export default VasistenciaService;