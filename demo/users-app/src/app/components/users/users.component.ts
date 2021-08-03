import { Component } from '@angular/core';

@Component({
  selector : "app-users",
  templateUrl : "./users.component.html",
  styleUrls : [`./users.component.css`]
})

export class UsersComponent{
  user = {
    firstName : "bill",
    lastName : "gates",
    income : 50000,
    isWorking : true,
    company : "Microsoft",
    dob : new Date("Dec 18, 1965"),
    image : "assets/images/bill.jpg",
    vote : 120
  }
  onMoreInfo(usr : any){
    // console.log("Event Data [PARENT] ", eventdata);
    alert(`Mr. ${usr.lastName} is working with ${usr.company}`)
  }
}
