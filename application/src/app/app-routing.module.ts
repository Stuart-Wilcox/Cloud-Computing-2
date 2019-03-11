import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewVmComponent } from './view-vm/view-vm.component';
import { CreateVmComponent } from './create-vm/create-vm.component';
import { StartVmComponent } from './start-vm/start-vm.component';
import { StopVmComponent } from './stop-vm/stop-vm.component';
import { UsageComponent } from './usage/usage.component';
import { ChargesComponent } from './charges/charges.component';
import {RegisterComponent} from './register/register.component';


import { AuthGuardService as AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-vm/:id',
    component: ViewVmComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-vm',
    component: CreateVmComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'start-vm/:id',
    component: StartVmComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stop-vm/:id',
    component: StopVmComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'usage/:id',
    component: UsageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'charges',
    component: ChargesComponent,
    canActivate: [AuthGuard],
  },
  {
    /* MAKE SURE THIS ONE IS LAST IN THE LIST */
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
