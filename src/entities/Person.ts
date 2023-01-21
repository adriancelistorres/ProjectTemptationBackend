
import { type } from "os";

import { BaseEntity, Column, Entity, Long, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  idperson: number;
  @Column()
  idrol: number;
  @Column()
  name: string;
  @Column()
  lastname: string;
  @Column({
    type: "date",
  })
  date_b: Date;
  @Column()
  dni: string;
  @Column()
  gender: string;
  @Column()
  address: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  state: number;
  @Column()
  key: string;
}
export default Person;
