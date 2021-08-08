import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn : 'root'
})
export class DataService{

  baseURL : string = "https://the-tcs-users-default-rtdb.firebaseio.com/userdata.json"

  constructor(
    private httpClient : HttpClient,
    private authService: AuthService
    ){}

  private counter: number = 0;
  getCounter(){
    return this.counter;
  }
  increaseCounter(){
    this.counter++;
  }
  getUser(){
    return this.httpClient.get<User[]>(`${this.baseURL}?auth=${this.authService.getToken()}`)
            // .pipe(map((response) =><User[]>response['userdata']))
  }


}
