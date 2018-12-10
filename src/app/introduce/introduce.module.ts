import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduceComponent } from './introduce.component';
import {IntroduceRouting} from './introduce.routing';
import {MarkdownModule} from 'ngx-markdown';
import { IntroNavComponent } from './intro-nav/intro-nav.component';
import { IntroTsComponent } from './intro-ts/intro-ts.component';
import { IntroNgComponent } from './intro-ng/intro-ng.component';
import {ShareModule} from '../share/share.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [IntroduceComponent, IntroNavComponent, IntroTsComponent, IntroNgComponent],
  imports: [
    CommonModule,
    FormsModule,
    IntroduceRouting,
    ShareModule,
    MarkdownModule.forChild(),
  ]
})
export class IntroduceModule { }
