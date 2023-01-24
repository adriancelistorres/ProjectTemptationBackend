import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Size extends BaseEntity{
    @PrimaryGeneratedColumn()
    idsize: number;
    @Column()
    name_size: string;

    @Column()
    state: number;
}

export default Size;