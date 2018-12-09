import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {TodoModal} from '../modal/todo.modal';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todo: Subject<TodoModal> = new Subject<TodoModal>();
  public todo$ = this._todo.asObservable();

  private _todoList: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  public todoList$ = this._todoList.asObservable();
  constructor() { }

  todoEmit(todo: TodoModal) {
    this._todo.next(todo);
  }

  todoListEmit(todos: any[]) {
    this._todoList.next(todos);
  }
}
