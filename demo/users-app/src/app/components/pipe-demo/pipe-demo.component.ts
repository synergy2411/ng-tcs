import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes...")
    }, 3000)
  })

  contactNumber = 987654321;

  username = "John Doe";

  filteredStatus = "";
  todoCollection = [
    { label : "to buy new jeans", status : "done"},
    { label : "to buy pulses", status : "pending"},
    { label : "to pot the plant", status : "done"},
    { label : "to renew car insurance", status : "pending"},
  ]
  onAddItem(){
    // Pure Change - Angular will trigger the digest cycle, hence pure pipe will work
    // this.todoCollection = [...this.todoCollection, {label : "", status : ""}]
    // Impure Change - Angular will not trigger digest cycle by default, hence need to make pipe impure
    this.todoCollection.push({label : "New Item", status : "pending"})
    debugger;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
