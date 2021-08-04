import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector : "[app-highlight]"
})
export class HighlightDirective{

  constructor(private elRef : ElementRef){
    this.elRef.nativeElement.style.backgroundColor = "aqua";
  }
}


// <app-highlight> </app-highlight>
// <div app-highlight> </div>
// <div class="app-highlight"></div>
