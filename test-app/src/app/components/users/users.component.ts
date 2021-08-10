import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector  :"app-users",
  template : `
    <h1>Users component loaded</h1>
    <h2>{{user.email}}</h2>
  `,
})

export class UsersComponent implements OnInit{

  user= {
    email : "test@test.com"
  }

  users : Array<{email : string; age : number}> = null;

  constructor(private dataService : DataService){}

  ngOnInit(){
    this.users = this.dataService.getUsers();
  }

//  TDD - Test Driven Development
//  - Write your test first, test will fail
//  - Write your Code, Test should pass


}
