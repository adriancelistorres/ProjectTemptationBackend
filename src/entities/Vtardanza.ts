import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vtardanza extends BaseEntity {
  @PrimaryGeneratedColumn()
  idasistencia: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  observacion: string;

  @Column()
  fh_asistencia: string;


}
