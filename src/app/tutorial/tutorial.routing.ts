import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TutorialComponent} from './tutorial.component';
import {TodoDayComponent} from './todo-day/todo-day.component';
import {TodoStarComponent} from './todo-star/todo-star.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialComponent,
    children: [
      { path: '', redirectTo: 'today', pathMatch: 'full' },
      { path: 'today', component: TodoDayComponent },
      { path: 'star', component: TodoStarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRouting {}
