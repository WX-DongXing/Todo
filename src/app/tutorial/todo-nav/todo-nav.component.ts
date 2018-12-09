import {Component, OnDestroy, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {TodoModal} from '../../modal/todo.modal';
import {TodoService} from '../../service/todo.service';
import {StarService} from '../../service/star.service';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.scss'],
})
export class TodoNavComponent implements OnInit, OnDestroy {

  todoList: TodoModal[] = [];
  todayTodoList: TodoModal[] = [];
  starTodoList: TodoModal[] = [];
  todoSub: Subscription;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private todoService: TodoService) {
    this.todoSub = this.todoService.todo$
      .subscribe((todo: TodoModal) => {
        // 添加todo
        if (!this.todoList.some((_todo: TodoModal) => _todo.uuid === todo.uuid)) {
          this.todoList.push(todo);
        } else {
          this.todoList.map((_todo: TodoModal) => {
            return this.todoList.find((_modify: TodoModal) => _modify.uuid === _todo.uuid);
          });
        }

        // 删除todo
        if (todo.isDelete) {
          this.todoList = this.todoList.filter((_todo: TodoModal) => _todo.uuid !== todo.uuid);
        }

        this.filterTodos();
        this.todoService.todoListEmit(this.todoList);
      });
  }

  ngOnInit() {
    this.todoService.todoList$
      .subscribe((todos: TodoModal[]) => {
        this.todoList = todos;
        this.filterTodos();
      });
  }

  ngOnDestroy() {
    if (this.todoSub) {
      this.todoSub.unsubscribe();
    }
  }

  filterTodos() {
    this.todayTodoList = this.todoList.filter((_todo: TodoModal) => (_todo.finished === false) && (_todo.isDelete === false));
    this.starTodoList = this.todoList.filter((_todo: TodoModal) => (_todo.isStar === true) && (_todo.finished === false));
  }

}
