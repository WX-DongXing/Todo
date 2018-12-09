import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TodoModal} from '../modal/todo.modal';

@Injectable({
  providedIn: 'root'
})
export class StarService {
  private _star: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  public star$ = this._star.asObservable();
  constructor() { }

  starEmit(todos: TodoModal[]) {
    this._star.next(todos);
  }
}
