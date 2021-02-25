import {PipeTransform, BadRequestException,ArgumentMetadata} from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';
export class TaskValidationStatus implements PipeTransform{ //debe implementar la clase PipeTransform para que se un Pipe
    
    readonly allowedStatus =   //arreglo con valores permitidos
    [
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN
    ];

    transform(value:any, metada:ArgumentMetadata) //transforme recibe dos parametros, el primero es el parametro a verificar y el segundo (opcional) un objeto con el tipo y nombre (metadata)
    {   value = value.toUpperCase();
        
        if(!this.isStatusValid(value))
            {throw new BadRequestException(`"${value} is not valid"`);} //manda el error hasta el cliente        
            return value; //este retorna el valor al manejador controller
    }

    private isStatusValid(status:any):Boolean
    {
        const result= this.allowedStatus.indexOf(status); //indexOf devuelve el indice donde se encuentra el valor, si no lo encuentra devulve -1
        return result!==-1;
    }

}