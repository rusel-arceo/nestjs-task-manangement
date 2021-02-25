import { Controller, Get, Post, Body, Param, Query, Delete, Patch, UsePipes, ValidationPipe} from '@nestjs/common'; // Automaticamente se import el Get o lo agregamos
import { TasksService } from './tasks.service';
import {CreateTaskDTO} from './dto/create-task-dto';
import { getTaskFilterDTO } from './dto/get-tasks-filter.dto';
import {TaskValidationStatus} from './pipes/task-status-validation.pipes';


@Controller('tasks')  //Es el nombre del servicio, es independiente del nombre del modulo y controller
export class TasksController {
    constructor(private tasksService: TasksService)
    {    }
    /* //   Indicamos los que va a manejar, ahora nest sabra que cuando haya una petición se get al task se mandará aquí
    @Get()
//    getAllTasks():Task[] lo modificamos para que filtre los resultados
    getTasks(@Query(ValidationPipe) filterDTO:getTaskFilterDTO):Task[]  //GetTaskFilterDTO contiene status y search, cuando se ejecute el manejador, este contendrá los queryparameters como objetos, Query significa que vamos a obtener los valores de QUERY PARAMETERS
    {     
        let tasks:Task[];
        console.log(filterDTO);
        //return this.tasksService.getTasks(filterDTO); //LLamamos al servicio que devuelve el arreglo

        //El método Object.keys() devuelve un array de las propiedades names de un objeto, en el mismo orden como se obtienen en un loop normal, a={ nombre: "Rusel", des: "Buena Onda" }; Object.keys(a);  Array [ "nombre", "des" ], ademas if(0) es false y if(>1) es true
        if(Object.keys(filterDTO).length)
        {
            tasks=this.tasksService.getTasksWithFilters(filterDTO);
        }
        else{
            tasks=this.tasksService.getAllTasks();
            }
        return tasks;
    }

    @Get('/:id')  //así decimos que es /task:id que sería la equivalencia en express, puede ser solo :id 
    //getTaskById(id:string):Task   de esta  manera el id se pasa por el body
    getTaskById(@Param('id') id:string):Task  //Hay que importar @Param, indica que los recibiremos en la url   /elID
    {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe) //Especificamos que use el pipe, en el DTO create-task se establece que valores verificar
    //createTask(@Body() body)  //Nest automaticamente manda el body a la función
    createTask(
    //@Body('title') title:string,  // De esta manera obtenemos los parametros directamente
    //@Body('description')description:string,
    @Body()
    createTaskTDO:CreateTaskDTO
    ):Task  //tipo que devuelve
    {
        
        //console.log("body",body);
       // console.log("Titulo",title);
        console.log("Titulo",createTaskTDO.title);
        console.log("description: ",createTaskTDO.description);
        //return this.tasksService.createTask(title, description);
        return this.tasksService.createTask(createTaskTDO);
    }
//Elimnar una tarea
    @Delete('/:id')
    deleteTask(@Param('id') id:string):object
    {   let resp:object;
        
        const respService =this.tasksService.deleteTask(id);
        if(respService)
        {
            resp = {ok:true, mesagge:"Elemento eliminado"}
        }else{
            console.log("Sucedio un error");
            resp= {ok:false, mesagge:"Ocurrio un error"}    
        }
        return resp;       
        
    }    
    @Patch('/:id/status') //Indica que el url es localhost:3000/elid/status  pero estatus se pasa en el body
    updateTaskStatus(
        @Param ('id') id:string,
        @Body ('status',TaskValidationStatus) status:TaskStatus):Task  // el TaskStatus viene del enum, asi recojemos el id de la url y el status del body
        //TaskValidationStatus es el custom pipe definido en directorio pipe, es una clase, usualmente hariamos new y pasariamos los parametros, llamariamos el constructor pero esto nest ya lo hace automaticamente.
        {
                       //porque JS pasa el valor por referencia.
            return this.tasksService.updateTaskStatus(id, status); 
        }
    
 */
}