import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector : "app-users",
  templateUrl : "./users.component.html",
  styleUrls : [`./users.component.css`]
})

export class UsersComponent implements OnInit, OnDestroy{
  title = "The title"
  showUser = false;
  users : User[];
  unSubUsers$ : Subscription;

 constructor(private dataService : DataService){}

  ngOnInit(){
   this.unSubUsers$=this.dataService.getUser()
    .subscribe((data)=>{
      console.log(data);
      this.users = data;
    })
  }

  ngOnDestroy(){
    this.unSubUsers$.unsubscribe();
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
