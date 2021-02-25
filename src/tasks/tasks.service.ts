import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task-dto';
import { getTaskFilterDTO } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
    /* 

    getAllTasks():Task[] 
    { return this.tasks; }

    getTaskById(id:string):Task
    {   
        const found=this.tasks.find((task)=>{return id===task.id});  //busca y devuelve el elemento
        if(!found)
        {throw new NotFoundException(`No se encontró el id ${id}`);}else  //El mensaje es opcional
        
        return found;
    }

    getTasksWithFilters({status,search}:getTaskFilterDTO):Task[] 
    {   let task= this.getAllTasks();
      
        if(status)
        {
            task= task.filter(task=>task.status===status);
            console.log("Entro al status, resultado",task);
        }

        if(search)
        {
            //El include busca en el string si existe la subcadenas, en ese caso devuelve true, y el filter al recibir true lo pone como parte del nuevo array
            task= task.filter(task=>task.title.includes(search) || task.description.includes(search));  
            console.log("Entro al search, resultado",task);
            //task= task.filter(task=>task.description.includes(search));  //
        }

        return task;
    }
    //createTask ({createTaskDTO}:CreateTaskDTO):Task  En su lugar desetruturamos de una vez
    createTask ({title,description}:CreateTaskDTO):Task
    {  //Para el ide usaremos una librería
        const task:Task =
        {
            id: uuidv4(),
            title,  //Al parecuer al recibirlos con el mismo nombre se asignan de forma automatica los valores
            description,
            status: TaskStatus.OPEN,  //Viene del enum y de el podemos tomar un valor ya definido en el task.model
        };
        
        this.tasks.push(task);
        return task;

    }

    deleteTask(id:string):boolean
    {
        const found=this.getTaskById(id); //Si no existe el id, Automaticamente escala el error hasta el usuario

        //Si existe eliminamos pero para no recorrer el arreglo dos veces, uno en el get y otro aquí, ya encontrado usaremos pop.
        //const tasksAux = this.tasks.filter(task=>task.id!==found.id); 

        var indice = this.tasks.indexOf(found); // obtenemos el indice
        this.tasks.splice(indice, 1); //El uno indica cuantos eliminar desde el indice

        //Todo esto se soluciona con el pipe en el getTaskById que retorna un error si no lo encuentra

        // if(tasksAux.length===this.tasks.length)
        // {
        //     return false;
        // }
       
        // this.tasks = tasksAux;
         return true;
    }

    updateTaskStatus(id:string, status:TaskStatus):Task  // el TaskStatus viene del enum
    {
        let task=this.getTaskById(id); 

        task.status = status;  //porque JS pasa el valor por referencia.
        return task;
    }
 */}
