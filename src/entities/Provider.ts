import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 class Provider extends BaseEntity {
  @PrimaryGeneratedColumn()
  idprovider: number;

  @Column()
  name_prov: string;

  @Column()
  ruc: string;

  @Column()
  company_name: string;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  state: number;

}

export default Provider;