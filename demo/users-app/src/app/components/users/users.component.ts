import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector : "app-users",
  templateUrl : "./users.component.html",
  styleUrls : [`./users.component.css`]
})

export class UsersComponent{
  title = "The title"
  showUser = false;
  user : User = {
    firstName : "bill",
    lastName : "gates",
    income : 50000,
    isWorking : true,
    company : "Microsoft",
    dob : new Date("Dec 18, 1965"),
    image : "assets/images/bill.jpg",
    vote : 120
  }
  onMoreInfo(usr : User){
    // console.log("Event Data [PARENT] ", eventdata);
    alert(`Mr. ${usr.lastName} is working with ${usr.company}`)
  }
}
