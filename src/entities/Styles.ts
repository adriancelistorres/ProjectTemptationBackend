import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 class Styles extends BaseEntity {
  @PrimaryGeneratedColumn()
  idstyles: number;

  @Column()
  name_sty: string;

  @Column()
  state: number;

}


export default Styles;