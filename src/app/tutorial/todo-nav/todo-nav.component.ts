import {Component, OnDestroy, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {TodoModal} from '../../modal/todo.modal';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.scss'],
})
export class TodoNavComponent implements OnInit, OnDestroy {

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
        if (todo.isStar && !this.starTodoList.some((_todo: TodoModal) => _todo.uuid === todo.uuid)) {
          this.starTodoList.push(todo);
        }

        if ((!todo.isStar || !todo.finished) && !this.todayTodoList.some((_todo: TodoModal) => _todo.uuid === todo.uuid)) {
          this.todayTodoList.push(todo);
        }

        if ((todo.isDelete || todo.finished) && this.todayTodoList.some((_todo: TodoModal) => _todo.uuid === todo.uuid)) {
          this.todayTodoList = this.todayTodoList.filter((_todo: TodoModal) => _todo.uuid !== todo.uuid);
        }

        if ((todo.isDelete || !todo.isStar || todo.finished) && this.starTodoList.some((_todo: TodoModal) => _todo.uuid === todo.uuid)) {
          this.starTodoList = this.starTodoList.filter((_todo: TodoModal) => _todo.uuid !== todo.uuid);
        }
      });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.todoSub) {
      this.todoSub.unsubscribe();
    }
  }

}
