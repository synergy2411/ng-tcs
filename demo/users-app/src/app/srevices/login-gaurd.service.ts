import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurdService implements CanActivate {

  constructor(private authService : AuthService) { }

  canActivate(){
    return this.authService.isAuthenticated();
  }
}
