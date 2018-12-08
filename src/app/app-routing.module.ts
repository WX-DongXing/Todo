import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial', pathMatch: 'full'},
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialModule' },
  { path: 'introduce', loadChildren: './introduce/introduce.module#IntroduceModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
