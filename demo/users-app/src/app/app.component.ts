import { Component, OnInit } from '@angular/core';
import { DataService } from './srevices/data.service';
import firebase from 'firebase';
import { AuthService } from './srevices/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showCmp : boolean = true

  constructor(
    private dataService : DataService,
    private authService :  AuthService
    ){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDUJSor91WEE4AoJd1I9JTH1fOgfhDSuaw",
      authDomain: "the-tcs-users.firebaseapp.com"
    })
  }
  getCounter(){
    return this.dataService.getCounter()
  }
  increaseCounter(){
    this.dataService.increaseCounter()
  }
  isUserAuthenticated(){
    return this.authService.isAuthenticated()
  }
}
