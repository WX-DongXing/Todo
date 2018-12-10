import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduceComponent } from './introduce.component';
import {IntroduceRouting} from './introduce.routing';
import {MarkdownModule} from 'ngx-markdown';
import { IntroNavComponent } from './intro-nav/intro-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { IntroTsComponent } from './intro-ts/intro-ts.component';
import { IntroNgComponent } from './intro-ng/intro-ng.component';

@NgModule({
  declarations: [IntroduceComponent, IntroNavComponent, IntroTsComponent, IntroNgComponent],
  imports: [
    CommonModule,
    IntroduceRouting,
    MarkdownModule.forChild(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class IntroduceModule { }
