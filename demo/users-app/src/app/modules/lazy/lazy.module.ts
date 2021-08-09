import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './components/i-am-lazy/i-am-lazy.component';
import { RouterModule } from '@angular/router';
import { LAYZ_ROUTES } from './lazy.routes';



@NgModule({
  declarations: [IAmLazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LAYZ_ROUTES)
  ]
})
export class LazyModule { }
