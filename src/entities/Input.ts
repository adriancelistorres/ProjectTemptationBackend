import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Input extends BaseEntity{
    @PrimaryGeneratedColumn()
    idinput: number;
  
    @Column()
    idproduc: number;
  
    @Column()
    stock: number;
  
    @Column()
    dateinp: Date;
}   

export default Input;