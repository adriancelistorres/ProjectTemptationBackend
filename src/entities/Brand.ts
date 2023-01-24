import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Brand extends BaseEntity{
    @PrimaryGeneratedColumn()
    idbrand: number;
    @Column()
    name_brand: string;

    @Column()
    state: number;
}

export default Brand;
