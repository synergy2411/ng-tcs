import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('',[
    Validators.required,
    Validators.email
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.exclamationMarkValidation
  ])
  registerForm : FormGroup

  exclamationMarkValidation(control : AbstractControl): ValidationErrors | null{
    const hasExclamation = control.value.indexOf("!") >= 0
    return hasExclamation ? null : { hasExclamationMark : true };
  }

  constructor(private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
   }

   onRegister(){
     console.log(this.registerForm);
   }

   onReset(){
     this.registerForm.reset();
   }

  ngOnInit(): void {
  }

}
