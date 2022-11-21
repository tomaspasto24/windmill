import { GetCodePasswordScreenComponent } from './get-code-password-screen/get-code-password-screen.component';
import { AbmPiezasScreenComponent } from './abm-piezas-screen/abm-piezas-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { WorkScreenComponent } from './work-screen/work-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrototypeDetailScreenComponent } from './prototype-detail-screen/prototype-detail-screen.component';
import { AbmPrototypesScreenComponent } from './abm-prototypes-screen/abm-prototypes-screen.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { RecoverPasswordScreenComponent } from './recover-password-screen/recover-password-screen.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'admin', component: AdminScreenComponent, canActivate: [AuthGuard]},
  { path: 'prototypes', component: AbmPrototypesScreenComponent, canActivate: [AuthGuard]}, //J
  { path: 'prototype-detail/:id', component: PrototypeDetailScreenComponent},
  { path: 'works', component: WorkScreenComponent, canActivate: [AuthGuard]}, //T
  { path: 'login', component: LoginScreenComponent}, //T
  { path: 'pieces', component: AbmPiezasScreenComponent, canActivate: [AuthGuard]}, //T
  { path: 'getemail-password', component: GetCodePasswordScreenComponent}, //T
  { path: 'recover-password/:code', component: RecoverPasswordScreenComponent}, //T
  { path: '',   redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
