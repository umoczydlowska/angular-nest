import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './todo.model';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
