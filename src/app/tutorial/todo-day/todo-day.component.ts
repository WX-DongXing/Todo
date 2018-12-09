import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {TodoModal} from '../../modal/todo.modal';

@Component({
  selector: 'app-todo-day',
  templateUrl: './todo-day.component.html',
  styleUrls: ['./todo-day.component.scss']
})
export class TodoDayComponent implements OnInit {

  time: Date;
  text: string;
  add = false;
  todoList: TodoModal[] = [];
  constructor(private todoService: TodoService) {
    this.time = new Date();
  }

  ngOnInit() {
  }

  addSwitch() {
    this.add = !this.add;
  }

  addTodo() {
    this.addSwitch();
    const todo = new TodoModal(this.text);
    this.todoList.push(todo);
    this.todoService.emitTodo(todo);
    this.text = '';
  }

  deleteTodo(todo: TodoModal) {
    todo.isDelete = true;
    this.todoService.emitTodo(todo);
    this.todoList = this.todoList.filter((_todo: TodoModal) => _todo.uuid !== todo.uuid);
  }

  starTodo(todo: TodoModal) {
    todo.isStar = !todo.isStar;
    this.todoService.emitTodo(todo);
  }

  checkTodo(todo: TodoModal) {
    todo.finished = !todo.finished;
    this.todoService.emitTodo(todo);
  }
}
