import Color from "../entities/Color";
import Roles from "../entities/Roles";
import { IColor } from "../Interfaces/IColor";

class ColorService{
    //METODO ASINCRONO PARA AÑADIR COLOR
    public async addColor(reqBody:IColor){
        //INSTANCIAMOS LA CLASE(ENTIDAD) 'Color'
        const colors = new Color();
         //Igualamos los atributos de la entidad 'colors' CON las entidades del reqBody que toma de la interfaz 'IColor'
        colors.idcolor = reqBody.idcolor;
        colors.name_col = reqBody.name_col;
        colors.state = reqBody.state;
        //ESPERA A QUE RETORNE TODO LO QUE SE GUARDE EN EL OBJETO 'colors'
        return await colors.save();
    }

    public async getColor(){
        //EL ':' SE UTILIZA PARA ASIGNAR UN TIPO DE DATO(YA SEA 'string','number','boolean',etc) A UNA VARIABLE.
        //QUE EN ESTE CASO, LA VARIABLE 'respuesta' SEA UN ARRAY DE TIPO 'IColor'.
        let respuesta : IColor [] = [];
        const colors = await Color.find();
        colors.map((c) =>{
            let obj: IColor = {
                idcolor: c.idcolor,
                name_col: c.name_col,
                state:c.state
            };
            respuesta.push(obj);
        })
        return respuesta;
    }
    
    public async getOneColor(idcolor: number){
        const rol = await Color.findOneBy({idcolor});
        let respuesta: IColor = {
            idcolor: rol?.idcolor,
            name_col:rol?.name_col,
            state:rol?.state
        };
        return respuesta;
    }

    public async updateColor(idcolor:number, reqBody:IColor){
        const colors = await Color.findOneBy({
            idcolor:idcolor
        });
        if(!colors)
        return Promise.reject("NO HAY COLORES");

        colors.name_col = reqBody.name_col;
        colors.state = reqBody.state;

        colors.save();
        return colors;
    }
    
    public async deleteColor(idcolor: number){

        const colors = await Color.findOneBy({idcolor:idcolor});
        if(!colors){
            return Promise.reject("NO HAY COLORES")
        }else{

            colors.state = 0;
            colors.save();
            return colors;
        }
        
    }

}

export default ColorService;