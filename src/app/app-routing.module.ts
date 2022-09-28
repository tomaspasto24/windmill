import { AbmPiezasScreenComponent } from './abm-piezas-screen/abm-piezas-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { WorkScreenComponent } from './work-screen/work-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrototypeDetailScreenComponent } from './prototype-detail-screen/prototype-detail-screen.component';

const routes: Routes = [
  { path: 'works', component: WorkScreenComponent},
  { path: 'login', component: LoginScreenComponent },
  { path: 'pieces', component: AbmPiezasScreenComponent },
  { path: 'prototype-detail', component: PrototypeDetailScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
