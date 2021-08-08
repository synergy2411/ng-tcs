import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/srevices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(loginForm : NgForm){
    console.log(loginForm);
    this.authService.login(
      loginForm.value.email,
      loginForm.value.password
    )
  }

  onReset(loginForm: NgForm){
    loginForm.reset();
  }

}
