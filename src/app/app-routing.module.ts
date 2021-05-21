import { NgModule } from '@angular/core';
import { Testpage1Component } from './testpage1/testpage1.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: Testpage1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
