import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [   // Components | Directives | Pipes
    AppComponent, UsersComponent, UserComponent,
    HighlightDirective
  ],
  imports: [        // Modules - Built-in | Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],    // Services -
  bootstrap: [AppComponent]
})
export class AppModule { }
