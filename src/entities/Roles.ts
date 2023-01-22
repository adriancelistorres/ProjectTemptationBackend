import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 class Roles extends BaseEntity {
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

export default Roles
