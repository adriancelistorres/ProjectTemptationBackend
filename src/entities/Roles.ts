import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 class Roles extends BaseEntity {
  @PrimaryGeneratedColumn()
  idrol: number;

  @Column()
  namerol: string;

  @Column()
  state: number;

}

export default Roles
