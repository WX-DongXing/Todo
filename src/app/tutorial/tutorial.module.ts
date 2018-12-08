import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial.component';
import {TutorialRouting} from './tutorial.routing';

@NgModule({
  declarations: [TutorialComponent],
  imports: [
    CommonModule,
    TutorialRouting
  ]
})
export class TutorialModule { }
