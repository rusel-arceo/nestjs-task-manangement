import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig:TypeOrmModuleOptions = {  //Es de tipo TypeOrmModuleOptions, que los objetos pueden tener tipo
    /* Aquí configuramos los datos de la conexion a la base de datos progrest */
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username:'postgres',
    password:'chatolito100',
    database:'taskmanagement',
    entities:[__dirname + '../**/*.entity.ts']
    }