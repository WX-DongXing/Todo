import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TodoModal} from '../modal/todo.modal';

@Injectable({
  providedIn: 'root'
})
export class TodayService {
  private _today: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  public today$ = this._today.asObservable();

  constructor() {}

  todayEmit(todos: TodoModal[]) {
    this._today.next(todos);
  }
}
