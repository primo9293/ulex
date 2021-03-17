import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth.routing';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    AuthRoutingModule
  ]
})
export class AuthModule { }