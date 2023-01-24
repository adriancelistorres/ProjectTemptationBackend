import Color from "../entities/Color";
import { IColor } from "../Interfaces/IColor";

class ColorService{
    //METODO ASINCRONO PARA AÑADIR COLOR
    public async addColor(reqBody:IColor){
        const colors = new Color();
        colors.idcolor = reqBody.idcolor;
        colors.name_col = reqBody.name_col;
        colors.state = reqBody.state;
        //ESPERA A QUE RETORNE TODO LO QUE SE GUARDE EN EL OBJETO 'colors'
        return await colors.save();
    }

    

}

export default ColorService;