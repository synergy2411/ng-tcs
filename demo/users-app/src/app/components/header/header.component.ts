import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/srevices/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authService.logout();
  }

  isUserAuthenticated(){
    return this.authService.isAuthenticated();
  }

}
