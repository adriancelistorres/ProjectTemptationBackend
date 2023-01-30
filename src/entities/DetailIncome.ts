import{BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class DetailIncome extends BaseEntity{

  @PrimaryGeneratedColumn()
  idincome: number;

  @Column()
  idicome: number;

  @Column()
  idproduc: number;

  @Column()
  price_buy: number;

  @Column()
  quantity: number;

  @Column()
  igv: number;

}

export default DetailIncome;