import{BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
  class Income extends BaseEntity{
  @PrimaryGeneratedColumn()
  idicome: number;

  @Column()
  idprovider: number;

  @Column()
  dateinco: string;

  @Column()
  state: number;
}


export default Income;