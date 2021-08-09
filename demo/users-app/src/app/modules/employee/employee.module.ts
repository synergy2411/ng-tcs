import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';

@NgModule({
  imports :   [ CommonModule ],
  declarations:     [NewEmployeeComponent],
  providers :     [],
  exports :     [NewEmployeeComponent]
})
export class EmployeeModule{}

// Eagerly Loaded -  Load it through Root Module
// Lazily Loaded - Load it through Routing
// ng g c modules/employee/components/new-employee
// ng g d modules/employee/directives/new-directive
// ng g p modules/employee/pipes/new-directive
// ng g s modules/employee/services/new-directive
