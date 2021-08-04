import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent
// implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{

  @Input() user : User
  @Input() title : string
  @Output() childEvent = new EventEmitter<User>()
  myDynamicClass = {'my-border' : true, 'my-feature' : false}
  myDynamicStyle = { fontSize : "1.3em" }
  num = 101;

  onToggle(){
    this.myDynamicClass['my-border'] = !this.myDynamicClass['my-border']
    this.myDynamicClass['my-feature'] = !this.myDynamicClass['my-feature']
  }
  onEventFire(){
    this.childEvent.emit(this.user)
  }

  // constructor(){console.log("constructor")}
  // ngDoCheck(): void {
  //   console.log("ngDoCheck")
  // }
  // ngAfterContentInit(): void {
  //   console.log("ngAfterContentInit")
  // }
  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked")
  // }
  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit")
  // }
  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked")
  // }
  // ngOnDestroy(): void {
  //   console.log("ngOnDestroy")
  //   clearInterval(this.identifier)
  // }
  // ngOnChanges(changes : SimpleChanges){console.log("ngOnChanges", changes)}
  // identifier = null;
  // ngOnInit(){
  //   console.log("ngOnInit");
  //   let i =0;
  //   this.identifier = setInterval(()=>{
  //     ++i;
  //     console.log("Timer ", i )
  //   }, 1000)
  // }

}
