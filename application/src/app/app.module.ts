import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CreateVmComponent } from './create-vm/create-vm.component';
import { StartVmComponent } from './start-vm/start-vm.component';
import { StopVmComponent } from './stop-vm/stop-vm.component';
import { ChargesComponent } from './charges/charges.component';
import { UsageComponent } from './usage/usage.component';
import { ViewVmComponent } from './view-vm/view-vm.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CreateVmComponent,
    StartVmComponent,
    StopVmComponent,
    ChargesComponent,
    UsageComponent,
    ViewVmComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
