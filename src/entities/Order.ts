import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Order extends BaseEntity{

    @PrimaryGeneratedColumn()
    idorder: number;

    @Column()
    idperson:number;

    @Column()
    idpay:number;

    @Column({
        type: "date"
    })
    dateorder: Date;

    @Column()
    state:number;

}
export default Order;