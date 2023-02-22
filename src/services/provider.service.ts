import Provider from "../entities/Provider";
import { IProvider } from "../Interfaces/IProvider";

class Providerservice{
    /*Metodo para Agregar una Marca */
    public async addServiceProvider(reqBody: IProvider){
        const provider =  new Provider();
        provider.idprovider = reqBody.idprovider;
        provider.name_prov =  reqBody.name_prov;
        provider.ruc=reqBody.ruc;
        provider.company_name=reqBody.company_name;
        provider.phone=reqBody.phone;
        provider.email=reqBody.email;
        provider.email=reqBody.email;
        provider.description=reqBody.description;
        provider.address =  reqBody.address;
        provider.state =  reqBody.state;
        return await provider.save();
    }

    /*Metodo para Obtener todos los proveedores */
    public async getServiceProvider(){
        let respuesta: IProvider[] = ([] =[]);
        const prov =  await Provider.find();
        prov.map((b) =>{
            let obj: IProvider = {idprovider: b.idprovider, name_prov: b.name_prov, ruc: b.ruc, company_name:b.company_name,phone:b.phone,
                email: b.email,description:b.description,address:b.address, state: b.state };
            respuesta.push(obj);
        })
        return respuesta;
    }

     /*Metodo para Obtener un provevedor */
     public async getServiceOneProvider(idprovider: number){
         const prov =  await Provider.findOneBy({idprovider: idprovider});
         let respuesta: IProvider ={
            idprovider: prov?.idprovider,
            name_prov: prov?.name_prov,
            ruc: prov?.ruc,
            company_name: prov?.company_name,
            phone: prov?.phone,
            email : prov?.email,
            description : prov?.description,
            address : prov?.address,
            state: prov?.state,
         }
         return respuesta;
     }

     /* Metodo para actualizar un provevedor */
     public async UpdateServiceProvider(idprovider:number, reqBody:IProvider){
        const prov = await Provider.findOneBy({idprovider:idprovider});

        if(!prov) return Promise.reject("No hay Proveedor");

        prov.name_prov = reqBody.name_prov;
        prov.ruc=reqBody.ruc;
        prov.company_name=reqBody.company_name;
        prov.phone=reqBody.phone;
        prov.email=reqBody.email;
        prov.description=reqBody.description;
        prov.address =  reqBody.address;
        prov.state =  reqBody.state;
        prov.save();
        return prov;
     }

     /*Metodo para Eliminar un provevedor */
     public async deleteServiceProvider(idprovider: number){
        const prov = await Provider.findOneBy({idprovider: idprovider});
        if(!prov){
            return Promise.reject("No existe Proveedor")
        }else{
            prov.state = 0;
            prov.save();
            return prov;
        }
     }

}

export default Providerservice;