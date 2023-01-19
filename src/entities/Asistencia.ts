import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Asistencia extends BaseEntity {
  @PrimaryGeneratedColumn()
  idasistencia: number;

  @Column()
  iddocente: number;

  @Column()
  observacion: string;

  @Column()
  fh_asistencia: string;

  @Column()
  estado: number;

  @Column()
  qr: string;

  @Column()
  porcod: string;
}
