import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

@NgModule({
  declarations: [   // Components | Directives | Pipes
    AppComponent, UsersComponent, UserComponent,
    HighlightDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [        // Modules - Built-in | Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],    // Services -
  bootstrap: [AppComponent]
})
export class AppModule { }
