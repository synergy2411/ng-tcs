import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [   // Components | Directives | Pipes
    AppComponent, UsersComponent, UserComponent,
    HighlightDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ObservableDemoComponent
  ],
  imports: [        // Modules - Built-in | Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],    // Services -
  bootstrap: [AppComponent]
})
export class AppModule { }
