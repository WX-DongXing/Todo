import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {TodoModal} from '../modal/todo.modal';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todo: Subject<TodoModal> = new Subject<TodoModal>();
  public todo$ = this._todo.asObservable();
  constructor() { }

  emitTodo(todo: TodoModal) {
    this._todo.next(todo);
  }
}
