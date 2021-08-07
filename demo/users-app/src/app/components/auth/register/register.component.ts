import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/srevices/auth.service';

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
    // Validators.pattern(/^[\d]{3}-[\d]{3}$/),   // 123-456
    this.exclamationMarkValidation,
    // this.maxLimitValidator(6)
  ])
  registerForm : FormGroup

  exclamationMarkValidation(control : AbstractControl): ValidationErrors | null{
    const hasExclamation = control.value.indexOf("!") >= 0
    return hasExclamation ? null : { hasExclamationMark : true };
  }

  constructor(
      private fb : FormBuilder,
      private auhtService : AuthService) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
   }

   onRegister(){
     console.log(this.registerForm);
     this.auhtService.register(
       this.registerForm.value.username,
       this.registerForm.value.password
     )
   }

   onReset(){
     this.registerForm.reset();
   }

  ngOnInit(): void {
  }

}
