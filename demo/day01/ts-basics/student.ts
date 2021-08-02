// Constructor Injection

export class Student {
    // private firstName : string;
    // private lastName : string;
    constructor(
        private firstName : string, 
        private lastName : string){
        // this.firstName = firstName;
        // this.lastName = lastName;
    }
    sayHello () : string{
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

export function add(num1, num2){return num1 + num2}

export const MAGIC_NUMBER = Math.round(Math.random()*100)