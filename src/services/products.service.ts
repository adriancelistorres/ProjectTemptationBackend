import { IProducts } from "../Interfaces/IProducts";
import { AppDataSource } from "../databases/db";
import Products from "../entities/Products";
import bcrypt from "bcrypt";

class ProductsService {
  public async addServiceProducts(name_p: string, reqBody: IProducts) {

    try {
      const data =  await AppDataSource.createQueryBuilder()
      .select("produc")
      .from(Products, "produc")
      .where("produc.name_p = :name_p", {name_p})
      .getOne();

      if (data?.name_p != reqBody.name_p) {
        const products = new Products();
        products.idproduc = reqBody.idproduc;
        products.idcat = reqBody.idcat;
        products.idsize = reqBody.idsize;
        products.idstyles = reqBody.idstyles;
        products.idbrand = reqBody.idbrand;
        products.idcolor = reqBody.idcolor;
        products.name_p = reqBody.name_p;
        products.description = reqBody.description;
        products.price = reqBody.price;
        products.stock = reqBody.stock;
        products.image_front = reqBody.image_front;
        products.image_back = reqBody.image_back;
        products.image_using = reqBody.image_using;
        products.state = reqBody.state;
        products.save()
        return data;
      } else{
        return data;
      }
    } catch (error) {
      return Promise.reject(" does not exist ");
    }
  }

  public async getServiceProducts() {
    let respuesta: IProducts[] = ([] = []);
    const products = await Products.find();
    products.map((b) => {
      let obj: IProducts = {
        idproduc: b.idproduc,
        idcat: b.idcat,
        idsize: b.idsize,
        idstyles: b.idstyles,
        idbrand: b.idbrand,
        idcolor: b.idcolor,
        name_p: b.name_p,
        description: b.description,
        price: b.price,
        stock: b.stock,
        image_front: b.image_front,
        image_back: b.image_back,
        image_using: b.image_using,
        state: b.state,
      };
      respuesta.push(obj);
    });
    return respuesta;
  }

  public async getServiceOneProduct(idproduc: number) {
    const product = await Products.findOneBy({ idproduc: idproduc });
    let respuesta: IProducts = {
      idproduc: product?.idproduc,
      idcat: product?.idcat,
      idsize: product?.idsize,
      idstyles: product?.idstyles,
      idbrand: product?.idbrand,
      idcolor: product?.idcolor,
      name_p: product?.name_p,
      description: product?.description,
      price: product?.price,
      stock: product?.stock,
      image_front: product?.image_front,
      image_back: product?.image_back,
      image_using: product?.image_using,
      state: product?.state,
    };
    return respuesta;
  }

  public async UpdateServiceProduct(
    name_p: string,
    idproduc: number,
    reqBody: IProducts
  ) {
    try {
      // const data = await AppDataSource.createQueryBuilder()
      //   .select("products")
      //   .from(Products, "products")
      //   .where("products.name_p = :name_p", { name_p })
      //   .getOne();

      // console.log(data);
      // if (data?.state !=  reqBody.state) {
        const product = await Products.findOneBy({ idproduc: idproduc });

        if (!product) return Promise.reject("No se encontro Producto");

        product.idcat = reqBody.idcat;
        product.idsize = reqBody.idsize;
        product.idstyles = reqBody.idstyles;
        product.idbrand = reqBody.idbrand;
        product.idcolor = reqBody.idcolor;
        product.name_p = reqBody.name_p;
        product.description = reqBody.description;
        product.price = reqBody.price;
        product.stock = reqBody.stock;
        product.image_front = reqBody.image_front;
        product.image_back = reqBody.image_back;
        product.image_using = reqBody.image_using;
        product.state = reqBody.state;
        product.save();
        return product;
      // }else{
      //   return data;
      // }

      // if (data?.name_p != reqBody.name_p) {
      //   const product = await Products.findOneBy({ idproduc: idproduc });

      //   if (!product) return Promise.reject("No se encontro Producto");

      //   product.idcat = reqBody.idcat;
      //   product.idsize = reqBody.idsize;
      //   product.idstyles = reqBody.idstyles;
      //   product.idbrand = reqBody.idbrand;
      //   product.idcolor = reqBody.idcolor;
      //   product.name_p = reqBody.name_p;
      //   product.description = reqBody.description;
      //   product.price = reqBody.price;
      //   product.stock = reqBody.stock;
      //   product.image_front = reqBody.image_front;
      //   product.image_back = reqBody.image_back;
      //   product.image_using = reqBody.image_using;
      //   product.state = reqBody.state;
      //   product.save();
      //   return data;
      // } else {
      //   return data;
      // }
    } catch (error) {
      return Promise.reject(" does not update ");
    }
  }
  /*Metodo para Eliminar un provevedor */
  public async deleteServiceProduct(idproduc: number) {
    const product = await Products.findOneBy({ idproduc: idproduc });
    const error = {
      msg: "No existe este Producto"
    }
    if (!product) {
      return error
    } else {
      product.state = 0;
      product.save();
      return product;
    }
  }
}
export default ProductsService;
