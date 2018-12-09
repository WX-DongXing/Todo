import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';

const MatModules = [
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [...MatModules],
  exports: [...MatModules]
})
export class ShareModule { }
