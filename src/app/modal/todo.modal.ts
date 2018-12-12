import * as uuid from 'uuid';

export class TodoModal {
  uuid: string;

  constructor(public title: string = '', public isStar: boolean = false,
              public isDelete: boolean = false, public finished: boolean = false) {
    this.uuid = uuid.v4();
  }
}
