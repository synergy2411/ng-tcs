import { Component } from '@angular/core';
import { DataService } from './srevices/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showCmp : boolean = true
  constructor(private dataService : DataService){}
  getCounter(){
    return this.dataService.getCounter()
  }
  increaseCounter(){
    this.dataService.increaseCounter()
  }
}
