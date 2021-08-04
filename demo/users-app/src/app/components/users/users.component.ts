import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { USER_DATA } from '../../data/mock';
@Component({
  selector : "app-users",
  templateUrl : "./users.component.html",
  styleUrls : [`./users.component.css`]
})

export class UsersComponent implements OnInit{
  title = "The title"
  showUser = false;
  user : User;

  ngOnInit(){
    this.user = USER_DATA;
  }

  onMoreInfo(usr : User){
    // console.log("Event Data [PARENT] ", eventdata);
    alert(`Mr. ${usr.lastName} is working with ${usr.company}`)
  }
}
