import { AppDataSource } from "../databases/db";
import { Asistencia } from "../entities/Asistencia";
import { IAsisReq } from "../Interfaces/IAsistencia";

class TardanzaService {
    constructor() {}
  
    public async tardanza(iddocente: number) {
      console.log("LOGservice", iddocente);
      let observacion:String="tardanza"
      try {
        const asistencias = await Asistencia.findOneBy({ iddocente:iddocente });
        let respuesta: IAsisReq = {
          iddocente:asistencias?.iddocente,
          observacion:asistencias?.observacion
        };
        if (respuesta.observacion="inasistencia"){
        const data = await AppDataSource.createQueryBuilder()
          .select("asis")
          .from(Asistencia, "asis")
          .where("asis.iddocente = :iddocente", { iddocente })
          .andWhere("asis.observacion = :observacion", { observacion })
          .getMany();
        // console.log("LOG1", data);
        return data;}
      } catch (error) {
        if (error instanceof Error) {
          return Promise.reject(" does not exist ");
        
      }
    }
    }
  }

export default TardanzaService
  