import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core'

@Directive({
  selector : "[app-highlight]"
})
export class HighlightDirective{

  // private elRef : ElementRef;
  @Input() favColor : string;

  @HostBinding("style.backgroundColor") bgColor : any;

  @HostListener("mouseenter")
  onmouseenter(){
    this.bgColor = this.favColor;
  }

  @HostListener("mouseleave")
  onmouseleave(){
    this.bgColor = "transparent";
  }
  @HostListener("click") onclick(){console.log("Clicked!!!")}

  // constructor(private elRef : ElementRef){
  //   // this.elRef = elRef;
  //   this.elRef.nativeElement.style.backgroundColor = "aqua";
  // }
}


// <app-highlight> </app-highlight>
// <div app-highlight> </div>
// <div class="app-highlight"></div>
