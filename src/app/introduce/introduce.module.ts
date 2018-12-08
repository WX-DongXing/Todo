import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduceComponent } from './introduce.component';
import {IntroduceRouting} from './introduce.routing';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  declarations: [IntroduceComponent],
  imports: [
    CommonModule,
    IntroduceRouting,
    MarkdownModule.forChild()
  ]
})
export class IntroduceModule { }
