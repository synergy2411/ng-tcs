"use strict";
// - Arrow Functions : () => {} - great for one-liner function which returns something
// - does not have 'this' keyword
exports.__esModule = true;
// let user = {
//     email :"john@test.com",
//     age : 32,
//     getDetails : function(){
//         // return this.email + " "+  this.age
//         // let that = this;
//         // return function(){
//         //     return that.email + " "+  that.age              // ?
//         // }
//         return () => this.email + ", " + this.age
//     }
// }
// let nestFunc = user.getDetails();
// console.log(nestFunc());                // ?
// let arr = [2,3,4,5];
// // ES5
// let tripleValueArray = arr.map(function(value){
//     return value * 3;
// })
// // Arrow Function
// let doubleArray = arr.map((val, index) => {
//     console.log("VALUE : ",val, index)
//     return val * 2
// })
// console.log("Double Value", doubleArray);
// console.log(tripleValueArray);
// - let/const - Block scope variable
// Objects, Arrays, Functions are reference types
// const user = {
//     email : "john@test.com"
// }
// user = {
//     email : "james@test.com"
// }
// // user.email = "jenny@test.com";
// console.log(user.email);        // jenny@test.com
// - Spread/Rest -> (...)
// Rest - always present in function arguments
// - creates a collection from individual items
// - Rest operator has to be last argument in function parameter
// const demo = (email, age, ...args) => {
//     console.log(args[0])            // ?
// }
// demo("john@test.com")
// demo("john@test.com", 34)
// demo("john@test.com", 34, true)
// SPREAD - Spreads the collection into individual items
// let arr = [3,4,5]
// let newArr = [1,2, ...arr, 6,7,8];
// console.log(newArr);    // [1,2,3,4,5,6,7,8] [1,2,[3,4,5],6,7,8]
// - Destructuring -> Collections -  Array/ Object
// let fruits = ["Apple", "Pear", "Orange", "Mango"]
// let [e1,,e3,e4] = fruits;
// console.log(e3);            // Orange
// let user = {
//     firstName : "John",
//     lastName : "Doe"
// }
// let {lastName, firstName} = user;
// console.log(firstName + ", "+ lastName)
// let user = {
//     email : "test@test.com",
//     age : 32,
//     friends : ["Foo", "bar","bam"],
//     address : {
//         street : "201, Main Road, Marathahalli",
//         city : "Bengaluru"
//     }
// }
// let { email, age, friends: [f1, f2, f3], address : { street, city } } = user;
// console.log(email, age, f1, f3, street, city)
// - Class Syntax
// - Inheritance
// - Module System (ES6 Module) -> import / export keywords -> 
var student_1 = require("./student");
var foo = new student_1.Student("Foo", "Bar");
console.log(foo.sayHello());
console.log(student_1.add(4, 6));
console.log("MAGIC NUMBER : ", student_1.MAGIC_NUMBER);
