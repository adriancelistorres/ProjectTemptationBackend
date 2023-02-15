import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Claims extends BaseEntity{
    @PrimaryGeneratedColumn()
    idclaims: number;

    @Column()
    idorder: number;

    @Column()
    subject: string;

    @Column()
    descripcion: string;

    @Column({
        type:"date"
    })
    date:Date;
    
    @Column()
    image: string;

    @Column()
    state: number;
}


export default Claims;