import { AppDataSource } from "../databases/db";
import { VhorarioDocente } from "../entities/VhorarioDocente";
import { IAsisReq } from "../Interfaces/IAsistencia";
import { Ihoradocente,  } from "../Interfaces/IVhorarioDocente";

class VhorarioDocenteService {
  constructor() {}
 
  // public async getServiceVhorarioDocente() {
  //   let respuesta: Ihoradocente[] = [];
  //   const countries = await VhorarioDocente.find();
  //   countries.map((c) => {
  //     let obj: Ihoradocente = { idhorario: c.idhorario, nombcurso: c.nombcurso,nomaula:c.nomaula, hora_inicio:c.hora_inicio,hora_fin:c.hora_fin };
  //     respuesta.push(obj);
  //   });
  //   return respuesta;
  // }

  public async getOneHorario(iddocente: number) {
    console.log("LOGservice", iddocente);
 
      const asistencias = await VhorarioDocente.findOneBy({ iddocente:iddocente });
      let respuesta: Ihoradocente = {
        idhorario:asistencias?.idhorario,
        iddocente:asistencias?.iddocente,
        nombcurso:asistencias?.nombcurso,
        nomaula:asistencias?.nomaula,
        hora_inicio:asistencias?.hora_inicio,
        hora_fin:asistencias?.hora_fin
      };

      if(respuesta.iddocente=iddocente){
        const data = await AppDataSource.createQueryBuilder()
        .select("hora")
        .from(VhorarioDocente, "hora")
        .where("hora.iddocente = :iddocente", { iddocente })
        .getMany();
      // console.log("LOG1", data);
      return data;
      }
    
      return respuesta;
      
    
  }
 
}

export default VhorarioDocenteService;
