
import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository <Task> {  //El <Task> esta definiendo el tipo de datos del repositorio, es como que hagas un nombre: string[] que sería igual a array<string>. Esto lo usamos para definir el entity que se usa.
    

}