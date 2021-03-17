import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
