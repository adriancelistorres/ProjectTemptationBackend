import { type } from "os";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";


@Entity()
export class VhorarioDocente extends BaseEntity {
  @PrimaryGeneratedColumn()
  idhorario: number;
  @Column()
  iddocente: number;
  @Column()
  nombcurso: string;

  @Column()
  nomaula: string;

  @Column()
  hora_inicio: string;

  @Column()
  hora_fin: string;

 

  

}
