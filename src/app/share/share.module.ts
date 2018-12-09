import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {MomentModule} from 'ngx-moment';
import {LayoutModule} from '@angular/cdk/layout';

const MatModules = [
  MatButtonModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCheckboxModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule
];

const CommonModules = [
  MomentModule
];

@NgModule({
  declarations: [],
  imports: [...MatModules, ...CommonModules],
  exports: [...MatModules, ...CommonModules]
})
export class ShareModule { }
