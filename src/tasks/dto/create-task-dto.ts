import {IsNotEmpty} from 'class-validator';
//creando el data transferer objetc
export class CreateTaskDTO{  //Basicamente es para tener los datos que se van a estar mandando de un lugar a otro para que en caso de cambio solo se modifiqué desde aquí, como la funcion mostrada en tsc para las intefaces
    @IsNotEmpty()  //Es mayuscula, es un pipe que viene de la libreria class-validator
    title:string;

    @IsNotEmpty()
    description:string;

}