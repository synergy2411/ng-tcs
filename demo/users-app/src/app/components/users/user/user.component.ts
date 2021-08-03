import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user : any
  @Output() childEvent = new EventEmitter<any>()

  onEventFire(){
    // this.childEvent.emit({message : "SUCCESS"})
    this.childEvent.emit(this.user)
  }
}
