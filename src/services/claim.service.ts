import Claims from "../entities/Claims";
import { IClaims } from "../Interfaces/IClaims";

class ClaimService{

    public async addServiceClaim(reqBody: IClaims){
        const claim = new Claims();
        claim.idclaims = reqBody.idclaims;
        claim.idorder = reqBody.idorder;
        claim.subject = reqBody.subject;
        claim.descripcion = reqBody.descripcion;
        claim.image = reqBody.image;
        claim.date = reqBody.date;
        claim.state = reqBody.state;
        return await claim.save();
    }

    public async getServiceClaim(){
        let respuesta: IClaims[] = [];
        const claim = await Claims.find();
        claim.map((c)=>{
            let obj: IClaims ={
                idclaims: c.idclaims,
                idorder: c.idorder,
                subject: c.subject,
                descripcion: c.descripcion,
                image:c.image,
                date: c.date,
                state:c.state
            }
            respuesta.push(obj)
        })
        return respuesta;
    }

    public async getServiceOneClaim(idclaims: number){
        const claim =  await Claims.findOneBy({idclaims: idclaims});
        let respuesta: IClaims ={
            idclaims: claim?.idclaims,
            idorder: claim?.idorder,
            subject: claim?.subject,
            descripcion: claim?.descripcion,
            image: claim?.image,
            date: claim?.date,
            state: claim?.state
        }
        return respuesta;
    }

    public async updateServiceClaim(idclaims: number, reqBody: IClaims){
        const claim = await Claims.findOneBy({idclaims: idclaims});

        if(!claim) return Promise.reject("No hay Reclamos");

        claim.idorder = reqBody.idorder,
        claim.subject = reqBody.subject,
        claim.descripcion = reqBody.descripcion,
        claim.date = reqBody.date,
        claim.state = reqBody.state;

        claim.save();
        
        return claim;
    }


    public async deleteServiceClaim(idclaims: number){
        const claim =  await Claims.findOneBy({idclaims: idclaims});

        // try {
        //     if(claim){
        //         claim.state = 0;
        //         claim.save();
        //         return claim;
        //     }

        // } catch (error) {
        //     console.log("NO EXISTE ESE RECLAMO:"+idclaims);
        //     return res.status(404).json({
        //         msg: "NO EXISTE ESE RECLAMO ",
        //       });
        // }
        const error = {
            msg: "NO EXISTE ESE MARCA",
          };
        if(!claim){
           
            return error;
              
        }else{
            claim.state = 0;
            claim.save();
            return claim;
        }
    }
}

export default ClaimService;