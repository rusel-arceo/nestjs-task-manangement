import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {TaskStatus} from './task-status.enum';
  //Declaramos que es un entidy que se usará para crear las tablas de la base de datos a travez de typeOrm
@Entity()
export class Task extends BaseEntity{  //Debe heredar de BaseEntity 
    //Indica que será la columna con la llave primaría y autogenerada y autoincrementada
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    title: string;

    @Column()
    description: string;
    
    @Column()
    status:TaskStatus;
}