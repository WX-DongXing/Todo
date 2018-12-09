import {Component, OnInit} from '@angular/core';
import {TodoModal} from '../../modal/todo.modal';
import {TodoService} from '../../service/todo.service';
import {StarService} from '../../service/star.service';

@Component({
  selector: 'app-todo-star',
  templateUrl: './todo-star.component.html',
  styleUrls: ['./todo-star.component.scss']
})
export class TodoStarComponent implements OnInit {

  time: Date;
  starList: TodoModal[] = [];
  constructor(private todoService: TodoService) {
    this.time = new Date();
    this.todoService.todoList$
      .subscribe((todos: TodoModal[]) =>
        this.starList = todos.filter((todo: TodoModal) => (todo.isStar === true)));
  }

  ngOnInit() {

  }

  deleteTodo(todo: TodoModal) {
    todo.isDelete = true;
    this.todoService.todoEmit(todo);
    this.starList = this.starList.filter((_todo: TodoModal) => _todo.uuid !== todo.uuid);
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
