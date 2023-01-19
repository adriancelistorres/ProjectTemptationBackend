import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  idusua: number;

  @Column()
  iddocente: number;

  @Column()
  usuario: string;

  @Column()
  contrasena: string;

  @Column()
  estado: number;
}
