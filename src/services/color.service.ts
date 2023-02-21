import { AppDataSource } from "../databases/db";
import Color from "../entities/Color";
import Roles from "../entities/Roles";
import { IColor } from "../Interfaces/IColor";

class ColorService {
  //METODO ASINCRONO PARA AÑADIR COLOR
  public async addColor(name_col: string, reqBody: IColor) {
    try {
      const data = await AppDataSource.createQueryBuilder()
        .select("color")
        .from(Color, "color")
        .where("color.name_col = :name_col", { name_col })
        .getOne();

      if (data?.name_col != reqBody.name_col) {
        const colors = new Color();
        colors.idcolor = reqBody.idcolor;
        colors.name_col = reqBody.name_col;
        colors.state = reqBody.state;
        colors.save();
        console.log(JSON.stringify(data));
        return data;
      } else {
        console.log(JSON.stringify(data));
        return data;
      }
    } catch (error) {
      return Promise.reject(" does not exist ");
    }
  }

  public async getColor() {
    //EL ':' SE UTILIZA PARA ASIGNAR UN TIPO DE DATO(YA SEA 'string','number','boolean',etc) A UNA VARIABLE.
    //QUE EN ESTE CASO, LA VARIABLE 'respuesta' SEA UN ARRAY DE TIPO 'IColor'.
    let respuesta: IColor[] = [];
    const colors = await Color.find();
    colors.map((c) => {
      let obj: IColor = {
        idcolor: c.idcolor,
        name_col: c.name_col,
        state: c.state,
      };
      respuesta.push(obj);
    });
    return respuesta;
  }

  public async getOneColor(idcolor: number) {
    const rol = await Color.findOneBy({ idcolor });
    let respuesta: IColor = {
      idcolor: rol?.idcolor,
      name_col: rol?.name_col,
      state: rol?.state,
    };
    return respuesta;
  }

  public async updateColor(name_col: string, idcolor: number, reqBody: IColor) {
    try {
      const color = await Color.findOneBy({ idcolor: idcolor });
      const data = await AppDataSource.createQueryBuilder()
        .select("color")
        .from(Color, "color")
        .where("color.name_col = :name_col", { name_col })
        .getOne();

      if (data?.state != reqBody.state) {


        if (!color) return Promise.reject("No hay Color");

        color.name_col = reqBody.name_col;
        color.state = reqBody.state;
        color.save();
        return data;
      }
      if (data?.name_col != reqBody.name_col) {
        if (!color) return Promise.reject("No hay Color");

        color.name_col = reqBody.name_col;
        color.state = reqBody.state;
        color.save();
        return data;
      } else {
        return data;
      }
    } catch (error) {
      return Promise.reject(" does not update ");
    }
  }

  public async deleteColor(idcolor: number) {
    const colors = await Color.findOneBy({ idcolor: idcolor });
    const error = {
      msg: "NO EXISTE ESTE COLOR",
    };
    if (!colors) {
      return error;
    } else {
      colors.state = 0;
      colors.save();
      return colors;
    }
  }
}

export default ColorService;
