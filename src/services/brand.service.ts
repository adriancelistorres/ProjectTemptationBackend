import { AppDataSource } from "../databases/db";
import Brand from "../entities/Brand";
import { IBrand } from "../Interfaces/IBrand";

class Brandservice {
  /*Metodo para Agregar una Marca */
  public async addServiceBrand(name_brand: string, reqBody: IBrand) {
    try {
      const data = await AppDataSource.createQueryBuilder()
        .select("brand")
        .from(Brand, "brand")
        .where("brand.name_brand = :name_brand", { name_brand })
        .getOne();
      if (data?.name_brand != reqBody.name_brand) {
        const brand = new Brand();
        brand.idbrand = reqBody.idbrand;
        brand.name_brand = reqBody.name_brand;
        brand.state = reqBody.state;
        brand.save();
        return data;
      } else {
        return data;
      }
    } catch (error) {
      return Promise.reject(" does not exist ");
    }
  }

  /*Metodo para Obtener todas marcas */
  public async getServiceBrand() {
    let respuesta: IBrand[] = ([] = []);
    const brand = await Brand.find();
    brand.map((b) => {
      let obj: IBrand = {
        idbrand: b.idbrand,
        name_brand: b.name_brand,
        state: b.state,
      };
      respuesta.push(obj);
    });
    return respuesta;
  }

  /*Metodo para Obtener una marca */
  public async getServiceOneBrand(idbrand: number) {
    const brand = await Brand.findOneBy({ idbrand: idbrand });
    let respuesta: IBrand = {
      idbrand: brand?.idbrand,
      name_brand: brand?.name_brand,
      state: brand?.state,
    };
    return respuesta;
  }

  /* Metodo para actualizar una marca */
  public async updateServiceBrand(
    name_brand: string,
    idbrand: number,
    reqBody: IBrand
  ) {
    try {
      const brand = await Brand.findOneBy({ idbrand: idbrand });
      const data = await AppDataSource.createQueryBuilder()
        .select("brand")
        .from(Brand, "brand")
        .where("brand.name_brand = :name_brand", { name_brand })
        .getOne();
      if (data?.state != reqBody.state) {
        if (!brand) return Promise.reject("No hay Marca");

        brand.name_brand = reqBody.name_brand;
        brand.state = reqBody.state;

        brand.save();
        return data;
      }
      if (data?.name_brand != reqBody.name_brand) {
        if (!brand) return Promise.reject("No hay Marca");

        brand.name_brand = reqBody.name_brand;
        brand.state = reqBody.state;

        brand.save();
        return data;
      } else {
        return data;
      }
    } catch (error) {
      return Promise.reject(" does not update ");
    }
  }

  /*Metodo para Eliminar una marca */
  public async deleteServiceBrand(idbrand: number) {
    const brand = await Brand.findOneBy({ idbrand: idbrand });
    const error = {
      msg: "NO EXISTE ESE MARCA",
    };

    if (!brand) {
      return error;
    } else {
      brand.state = 0;
      brand.save();
      return brand;
    }
  }
}

export default Brandservice;
