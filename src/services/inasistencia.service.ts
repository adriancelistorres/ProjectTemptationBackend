import { AppDataSource } from "../databases/db";
import { Asistencia } from "../entities/Asistencia";
import { IAsisReq } from "../Interfaces/IAsistencia";

class InasistenciaService {
    constructor() {}
  
    public async inasistencia(iddocente: number) {
      console.log("LOGservice", iddocente);
      let observacion:String="inasistencia"
      try {
        const asistencias = await Asistencia.findOneBy({ iddocente:iddocente });
        let respuesta: IAsisReq = {
          iddocente:asistencias?.iddocente,
          observacion:asistencias?.observacion
        };
        if (respuesta.observacion="inasistencia"){
        const data = await AppDataSource.createQueryBuilder()
          .select("inasis")
          .from(Asistencia, "inasis")
          .where("inasis.iddocente = :iddocente", { iddocente })
          .andWhere("inasis.observacion = :observacion", { observacion })
          .getMany();
        // console.log("LOG1", data);
        return data;
        }
      } catch (error) {
        if (error instanceof Error) {
          return Promise.reject(" does not exist ");
      }
    }
    }
  }

  export default InasistenciaService