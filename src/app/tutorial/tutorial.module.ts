import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial.component';
import {TutorialRouting} from './tutorial.routing';
import { TodoNavComponent } from './todo-nav/todo-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [TutorialComponent, TodoNavComponent],
  imports: [
    CommonModule,
    TutorialRouting,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class TutorialModule { }
