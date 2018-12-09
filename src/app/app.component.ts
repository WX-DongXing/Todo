import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor() {
    moment.locale('zh-cn');
  }
}
