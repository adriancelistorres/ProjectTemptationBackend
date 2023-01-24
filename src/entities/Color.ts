import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 class Color extends BaseEntity {
  @PrimaryGeneratedColumn()
  idcolor: number;

  @Column()
  name_col: string;

  @Column()
  state: number;

}

export default Color;