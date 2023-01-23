import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    idcat: number;

    @Column()
    name_cat: string;

    @Column()
    state: number;
}
export default Category
