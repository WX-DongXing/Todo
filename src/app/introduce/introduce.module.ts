import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduceComponent } from './introduce.component';
import {IntroduceRouting} from './introduce.routing';

@NgModule({
  declarations: [IntroduceComponent],
  imports: [
    CommonModule,
    IntroduceRouting
  ]
})
export class IntroduceModule { }
