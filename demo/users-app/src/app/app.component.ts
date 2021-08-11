import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from './srevices/data.service';
import firebase from 'firebase';
import { AuthService } from './srevices/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit{
  showCmp : boolean = true
  theCheck : boolean;
  constructor(
    private dataService : DataService,
    private authService :  AuthService,
    private sanitizer : DomSanitizer
    ){}

  ngOnInit(){
    // this.sanitizer.
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
