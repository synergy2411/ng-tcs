import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn : 'root'
})
export class DataService{

  constructor(private httpClient : HttpClient){}

  private counter: number = 0;
  getCounter(){
    return this.counter;
  }
  increaseCounter(){
    this.counter++;
  }
  getUser(){
    return this.httpClient.get<User[]>("assets/data/userdata.json")
            .pipe(map((response) =><User[]>response['userdata']))
  }
}
