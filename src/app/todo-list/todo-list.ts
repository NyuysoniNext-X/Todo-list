import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Todo{
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./todo-list.css'],
})

export class TodoListComponent {
  newTask: string = ''
  todos: Todo[] = []

  addTodo() {
    if(this.newTask.trim() === '')
      return
    this.todos.push({ id: Date.now(), task: this.newTask, completed: false});
    this.newTask = ''
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter( t => t.id !== id)
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed
  }
}
