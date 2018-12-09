import * as uuid from 'uuid';

export class TodoModal {
  uuid: string;
  title: string;
  isStar: boolean;
  isDelete: boolean;
  finished: boolean;

  constructor(title: string = '', isStar: boolean = false, isDelete: boolean = false, finished: boolean = false) {
    this.uuid = uuid.v4();
    this.title = title;
    this.isStar = isStar;
    this.isDelete = isDelete;
    this.finished = finished;
  }
}
