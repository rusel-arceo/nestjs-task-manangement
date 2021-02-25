import { TaskStatus } from '../task-status.enum';
import {IsNotEmpty, IsOptional,IsIn} from 'class-validator';
export class getTaskFilterDTO //Este data trasferer object is for filter for status in the get
{
    
    @IsNotEmpty() //Indica que no debe ser vacío pero tampo deja pasar si no lo mandamos, como queremos que sea opciona mandarlo usaremos @IsOptiona()
    @IsOptional()
    @IsIn([TaskStatus.DONE,TaskStatus.IN_PROGRESS,TaskStatus.OPEN])  //verifica que értenesca al arreglo de lo contrario escala el error
    status: TaskStatus;
    
    @IsOptional()
    @IsNotEmpty()
    search: string;
}