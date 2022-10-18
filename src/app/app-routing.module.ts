import { AbmPiezasScreenComponent } from './abm-piezas-screen/abm-piezas-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { WorkScreenComponent } from './work-screen/work-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrototypeDetailScreenComponent } from './prototype-detail-screen/prototype-detail-screen.component';
import { AbmPrototypesScreenComponent } from './abm-prototypes-screen/abm-prototypes-screen.component';

const routes: Routes = [
  { path: 'works', component: WorkScreenComponent}, //T
  { path: 'login', component: LoginScreenComponent }, //T
  { path: 'pieces', component: AbmPiezasScreenComponent }, //T
  { path: 'prototypes', component: AbmPrototypesScreenComponent}, //J
  { path: 'prototype-detail/:id', component: PrototypeDetailScreenComponent}, //J
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
