import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateVmComponent } from './create-vm/create-vm.component';
import { DeleteVmComponent } from './delete-vm/delete-vm.component';
import { StartVmComponent } from './start-vm/start-vm.component';
import { StopVmComponent } from './stop-vm/stop-vm.component';
import { UpgradeVmComponent } from './upgrade-vm/upgrade-vm.component';
import { DowngradeVmComponent } from './downgrade-vm/downgrade-vm.component';
import { UsageComponent } from './usage/usage.component';
import { ChargesComponent } from './charges/charges.component';

import { AuthGuardService as AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-vm',
    component: CreateVmComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'delete-vm',
    component: DeleteVmComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'start-vm',
    component: StartVmComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stop-vm',
    component: StopVmComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'upgrade-vm',
    component: UpgradeVmComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'downgrade-vm',
    component: DowngradeVmComponent,
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
