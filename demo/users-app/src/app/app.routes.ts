import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { ProductComponent } from './components/product/product.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { UsersComponent } from './components/users/users.component';
import { LoginGaurdService } from './srevices/login-gaurd.service';

export const APP_ROUTES: Routes = [
  {
    path : "",                     // http://localhost:4200/
    redirectTo : "login",
    pathMatch : 'full'
  },
  {
    path: 'login',                     // http://localhost:4200/login
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
  },{
    path : 'users',
    component : UsersComponent,
    canActivate : [LoginGaurdService]
  },{
    path : 'product',                     // http://localhost:4200/product
    component : ProductComponent,
    children : [
      {
        path : "overview/:productId/:productName",     // http://localhost:4200/product/overview/99
        component : OverviewComponent
      },
      {
        path : 'specification',         // http://localhost:4200/product/specification
        component : SpecificationComponent
      }
    ]
  },
  {
    path: '**',                      // http://localhost:4200/anywhere
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
