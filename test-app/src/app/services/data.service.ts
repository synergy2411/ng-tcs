import { Injectable } from "@angular/core";
import { from, of } from "rxjs";

@Injectable()
export class DataService{
  users = [
    {email : "john@test.com", age: 32},
    {email : "jenny@test.com", age: 33},
  ]

  getUsers(){
    return this.users
  }

  getObs(){
    return from(this.users)
  }

  getPromise(){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        resolve("here the data comes")
      }, 1000)
    })
  }
}
