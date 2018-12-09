import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial.component';
import {TutorialRouting} from './tutorial.routing';
import { TodoNavComponent } from './todo-nav/todo-nav.component';
import { TodoDayComponent } from './todo-day/todo-day.component';
import { TodoStarComponent } from './todo-star/todo-star.component';
import {ShareModule} from '../share/share.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TutorialComponent, TodoNavComponent, TodoDayComponent, TodoStarComponent],
  imports: [
    CommonModule,
    FormsModule,
    TutorialRouting,
    ShareModule,
  ]
})
export class TutorialModule { }
