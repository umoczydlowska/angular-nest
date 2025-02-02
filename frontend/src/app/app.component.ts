import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

export interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todoList: TodoItem[] = [];

  newTask: string = '';

  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: uuidv4(),
        task: this.newTask,
        completed: false,
      };

      this.todoList.push(newTodoItem);
      this.newTask = '';
    }
  }

  deleteTask(taskId: string): void {
    this.todoList = this.todoList.filter((task) => task.id !== taskId);
  }

  completeTask(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed;
  }
}
