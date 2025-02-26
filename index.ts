// Infer Type (Implicit Type)
// let usersName = "ziyad"
// usersName = 10

// Defaining Type(Explicit Type)
// let fulName: string = "Muhammed ziyad";
// let age: number = 17;
// let softwareEngineer: boolean = true;
// let skills: string[] = ["react", "next", "express", "mongodb"];
// let count: number[] = [1, 2, 3, 4];
// let emtyArray: [] = [];
// let userDetails: {
//   name: string;
//   age: number;
//   place: string;
//   skilled: boolean;
// } = { name: "ziyad", age: 17, place: "Malappuram", skilled: true };

// <------------------------->

// Interface
// interface Details {
//   name: string;
//   age: number;
//   place: string;
//   skilled: boolean;
//   getName: () => void;
// }
// let userDetails: Details = {
//   name: "ziyad",
//   age: 17,
//   place: "Malappuram",
//   skilled: true,
//   getName() {
//     console.log(this.name);
//   },
// };

// <------------------------->

// Type
// type Details = {
//     name: string;
//       age: number;
//       place: string;
//       skilled: boolean;
//       getName: () => void;
// }
// let userDetails: Details = {
//       name: "ziyad",
//       age: 17,
//       place: "Malappuram",
//       skilled: true,
//       getName() {
//         console.log(this.name);
//       },
//     };

// <------------------------->

// Union
// let skills:(string|number)[]  = ["react", "next", "express", "mongodb",10,20];
// type Details = {
//     name: string|number;
//       age: number|string;
//       place: string;
//       skilled: boolean|string;
//       getName: () => void;
// }
// let userDetails: Details = {
//       name: "ziyad",
//       age: 17,
//       place: "Malappuram",
//       skilled: true,
//       getName() {
//         console.log(this.name);
//       },
//     };

// <------------------------->

// Optional
// type Details = {
//   name: string;
//   age: number;
//   place?: string;
//   skilled?: boolean;
//   getName?: () => void;
// };
// let userDetails: Details = {
//   name: "ziyad",
//   age: 17,
//   place: "Malappuram",

// };

// <------------------------->

// Function
// type Details = {
//   name: string;
//   age: number;
//   place?: string;
//   skilled?: boolean;
//   getName?: () => void;
// };
// let userDetails: Details = {
//   name: "ziyad",
//   age: 17,
//   place: "Malappuram",
// };

// function getUserName(userDetails: Details) {
//   return userDetails.name;
// }

// getUserName(userDetails);

// function getUserName(userDetails: Details) {
//     return userDetails.name;
//   }
//   getUserName(userDetails);

// <------------------------->

// Named Type
// type statusType = "pending1"|"complieted1"|"failed1"
// var currentStatus:statusType
// // from API
// const response = "pending"
// if(response==="pending"){
//     currentStatus = "pending1"
// }
