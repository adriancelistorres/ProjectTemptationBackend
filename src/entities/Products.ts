import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
  idproduc: number;

  @Column()
  idcat: number;

  @Column()
  idsize: number;

  @Column()
  idstyles: number;

  @Column()
  idbrand: number;

  @Column()
  idcolor: number;

  @Column()
  name_p: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  image_front: number;

  @Column()
  image_back: number;

  @Column()
  image_using: number;

  @Column()
  state: number;
}

export default Products;