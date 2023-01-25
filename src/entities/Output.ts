import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 class Output extends BaseEntity {
  @PrimaryGeneratedColumn()
  idout: number;

  @Column()
  idproduc: number;

  @Column()
  stock: number;

  @Column()
  dateout: Date;
 }
 export default Output;