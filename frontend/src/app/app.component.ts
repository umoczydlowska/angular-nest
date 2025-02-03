import { CommonModule, NgClass, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { AppService } from './app.service';

export interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgFor,
    NgClass,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  products$: Observable<any> | undefined;

  constructor(private productsServise: AppService) {}

  ngOnInit(): void {
    this.products$ = this.productsServise.getProducts();
  }

  todoList: TodoItem[] = [];

  newTask: string = '';

  addProduct(): void {
    this.productsServise
      .addProducts({
        id: Math.floor(Math.random() * 100) + 1,
        title: 'Elko',
        description: 'siema',
        price: '3 zł',
      })
      .subscribe(() => {
        this.products$ = this.productsServise.getProducts(); // Refresh the list after adding
      });
  }

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
