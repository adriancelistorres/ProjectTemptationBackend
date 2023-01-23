import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { deflate } from "zlib";

@Entity()
class Brand extends BaseEntity{
    @PrimaryGeneratedColumn()
    idbrand: number;

    @Column()
    name_brand: String;

    @Column()
    state: number;
}
export default Brand;