import { User } from "../model/user";

export const USER_DATA : User[] =  [
  {
  firstName : "bill",
  lastName : "gates",
  income : 50000,
  isWorking : true,
  company : "Microsoft",
  dob : new Date("Dec 18, 1965"),
  image : "assets/images/bill.jpg",
  vote : 120
},
  {
  firstName : "steve",
  lastName : "jobs",
  income : 0,
  isWorking : false,
  company : "Apple",
  dob : new Date("Jan 1, 1965"),
  image : "assets/images/steve.jpg",
  vote : 180
},
  {
  firstName : "tim b.",
  lastName : "lee",
  income : 20000,
  isWorking : true,
  company : "World Wide Web",
  dob : new Date("Aug 4, 1965"),
  image : "assets/images/tim.png",
  vote : 90
}
]
