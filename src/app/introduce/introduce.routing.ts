import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroduceComponent} from './introduce.component';
import {IntroTsComponent} from './intro-ts/intro-ts.component';
import {IntroNgComponent} from './intro-ng/intro-ng.component';

const routes: Routes = [
  {
    path: '',
    component: IntroduceComponent,
    children: [
      { path: '', redirectTo: 'typescript', pathMatch: 'full' },
      { path: 'typescript', component: IntroTsComponent },
      { path: 'angular', component: IntroNgComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroduceRouting { }
