import { Component } from "@angular/core";

@Component({
  selector  :"app-users",
  template : `
    <h1>Users component loaded</h1>
    <h2>{{user.email}}</h2>
  `
})

export class UsersComponent{

  user = {
    email : "test@test.com"
  }
//  TDD - Test Driven Development
//  - Write your test first, test will fail
//  - Write your Code, Test should pass


}
