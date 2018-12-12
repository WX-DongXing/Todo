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
  todayList: TodoModal[] = [];
  constructor(private todoService: TodoService) {
    this.time = new Date();
    this.todoService.todoList$
      .subscribe((todos: TodoModal[]) =>
        this.todayList = todos.filter((todo: TodoModal) => todo.isDelete === false));
  }

  ngOnInit() {
  }

  addSwitch() {
    this.add = !this.add;
  }

  addTodo() {
    this.addSwitch();
    const todo = new TodoModal(this.text);
    this.todayList.push(todo);
    this.todoService.todoEmit(todo);
    this.text = '';
  }

  deleteTodo(todo: TodoModal) {
    todo.isDelete = true;
    this.todoService.todoEmit(todo);
    this.todayList = this.todayList.filter((_todo: TodoModal) => _todo.uuid !== todo.uuid);
  }

  starTodo(todo: TodoModal) {
    todo.isStar = !todo.isStar;
    this.todoService.todoEmit(todo);
  }

  checkTodo(todo: TodoModal) {
    todo.finished = !todo.finished;
    this.todoService.todoEmit(todo);
  }
}
