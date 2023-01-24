import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 class PaymentMethod extends BaseEntity {
  @PrimaryGeneratedColumn()
  idpay: number;

  @Column()
  name_pay: string;

  @Column()
  state: number;

  @Column()
  key: string;

}

export default PaymentMethod;