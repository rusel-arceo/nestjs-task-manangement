import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(typeOrmConfig)  //importamos el typeOrm que maneja la conexion de la BD (progrest en este caso)
  ],
  
  //controllers: [TasksController],  NO es necesario ya que lo llama el task.module


})
export class AppModule {}
