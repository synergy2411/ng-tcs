// var x = 100;

// x = "Some String";

// console.log(typeof x);          // string

// x = true;

// console.log(typeof x);          // boolean

// var y = "100";

// console.log(x==y);      // true
// console.log(x===y);      // checks the value as well as type

// function longRunningOperation(){
//     setTimeout(function(){
//         console.log("Running the operation...")
//     }, 3000)
// }

// function webRequest(req){
//     console.log("Starting the request with ID #", req.id)
//     longRunningOperation();
//     console.log("Ending the request with ID #", req.id)
// }

// webRequest({id : 1});
// webRequest({id : 2});

// OUTPUT ?
// Starting with ID #1
// Ending with ID #1
// Running the operation





// setTimeout(() => {                  // Async - Macro Tasks
//     console.log("Timer")
// },0)

// Promise.resolve("Resolved").then(console.log);        // Async - Micro Tasks
// console.log("Console log");         // Sync

// OUTPUT ?
// 1. console log
// 2. Resolved
// 3. Timer















