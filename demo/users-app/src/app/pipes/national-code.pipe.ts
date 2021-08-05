import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name : "nationalcode"
})
export class NationalCodePipe implements PipeTransform {

  // Reverse
  transform(value: any, code : string){
    switch(code){
      case "USA" : return "+1 " + value
      case "AUS" : return "+12 " + value
      case "EUR" : return "+23 " + value
      default : return "+91 " + value
    }

  }
}
