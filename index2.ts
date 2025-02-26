// Function Overloading
// function add (num1:number,num2:number):number
// function add (num1:string,num2:string):string
// function add (num1:any,num2:any):any{
//     return num1+num2
// }
// add(1,3)
// add("10","20")

// <------------------------->

// Genarics
// function getAge <t>(age:t):t {
//     return age
// }
// getAge<string>("20")
// getAge<number>(20)

// type UserDetails = {
//   name: string;
//   age: number;
// };

// type AdminDetails = {
//   fullName: string;
//   roll: string;
// };

// const userDetails: UserDetails = {
//   name: "ziyad",
//   age: 20,
// };
// const adminDetails: AdminDetails = {
//   fullName: "Muhammed Ziyad",
//   roll: "admin",
// };

// function getDetails<t>(details: t): t {
//   return details;
// }

// const userValue = getDetails<UserDetails>(userDetails);
// const adminValue = getDetails<AdminDetails>(adminDetails);

// userValue.
// adminValue.
