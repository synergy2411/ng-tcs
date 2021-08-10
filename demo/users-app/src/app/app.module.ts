import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

import { EmployeeModule } from './modules/employee/employee.module'

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { AuthInterceptor } from './srevices/auth-interceptor.service';
import { LoggerInterceptor } from './srevices/logger.interceptor';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCompComponent } from './components/mat-comp/mat-comp.component';


@NgModule({
  declarations: [   // Components | Directives | Pipes
    AppComponent, UsersComponent, UserComponent,
    HighlightDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ObservableDemoComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent,
    MatCompComponent
  ],
  imports: [        // Modules - Built-in | Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptor,
    multi : true
  } ],    // Services -
  bootstrap: [AppComponent]
})
export class AppModule { }
