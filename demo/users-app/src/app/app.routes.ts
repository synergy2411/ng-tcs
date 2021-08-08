import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';

export const APP_ROUTES: Routes = [
  {
    path: '',                     // http://localhost:4200
    component: LoginComponent,
  },
  {
    path: 'pipe',                     // http://localhost:4200/pipe
    component: PipeDemoComponent,
  },
  {
    path: 'observables',                     // http://localhost:4200/observable
    component: ObservableDemoComponent,
  },
  {
    path: 'register',                     // http://localhost:4200/register
    component: RegisterComponent,
  },
  {
    path: '**',                      // http://localhost:4200/anywhere
    redirectTo: '/',
    pathMatch: 'full',
  },
];
