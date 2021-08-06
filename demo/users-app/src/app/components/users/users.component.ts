import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector : "app-users",
  templateUrl : "./users.component.html",
  styleUrls : [`./users.component.css`]
})

export class UsersComponent implements OnInit{
  title = "The title"
  showUser = false;
  users : User[];

 constructor(private dataService : DataService){}

  ngOnInit(){
   this.dataService.getUser()
    .subscribe((data: User[])=>{
      this.users = data;
    })
  }

  onMoreInfo(usr : User){
    alert(`Mr. ${usr.lastName} is working with ${usr.company}`)
  }

  getCounter(){
    return this.dataService.getCounter();
  }

  increaseCounter(){
    this.dataService.increaseCounter();
  }

}
