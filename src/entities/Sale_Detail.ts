import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
class SaleDetail extends BaseEntity{
    @PrimaryGeneratedColumn()
    idsale: number;

    @Column()
    idproduc: number;

    @Column()
    idorder: number;

    @Column()
    quantity: number;

    @Column()
    price_sale: number;

    @Column()
    discount: number;
}
export default SaleDetail;