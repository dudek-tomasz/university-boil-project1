import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {ResultComponent} from "./result/result.component";

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
