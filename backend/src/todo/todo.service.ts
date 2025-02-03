import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './todo.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
  ) {}

  async getTasks(): Promise<Task[]> {
    return this.taskModel.findAll();
  }

  findTask(id: string): Promise<Task | null> {
    return this.taskModel.findOne({
      where: {
        id,
      },
    });
  }

  async removeTask(id: string): Promise<void> {
    const task = await this.findTask(id);
    if (task) {
      await task.destroy();
    }
  }

  async addTask(newTitle: string): Promise<void> {
    await this.taskModel.create({ title: newTitle, completed: false });
  }
}
