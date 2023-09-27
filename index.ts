const myName: string = "Jayakanth";

//any
let newData; //by default if the the variable is not initialized it asigned to any type.

// number array
const numArray: number[] = [1, 3, 5, 7, 9];
//string array
const stringArray: string[] = ["milk", "bread", "cookies"];
//number or string array  =>  union type
const numOrStringArray: (number | string)[] = [1, "two", 3, "four"];

//tuple
const userData: [string, number] = ["jayakanth", 22];
//named tuple
const userData2: [name: string, age: number] = ["hari", 24];

//any type => not recommended to use
let collections: any = 12;
collections = "smart";
collections = false;

//functions
const calculateAge = (birthYear: number): number => {
  return new Date().getFullYear() - birthYear;
};

//objects without types
let user = {
  name: "jk",
  age: 22,
  isAdmin: false,
};
//user.name = 21      => Type 'number' is not assignable to type 'string'
//user.age = ''       => Type 'string' is not assignable to type 'number'
//user.phone = 100    => Property 'phone' does not exist on type   (valid in JS)

//objects with types
let userObj: {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: string; // ? means optional
};
//example
userObj = {
  name: "arun",
  age: 19,
  isAdmin: true,
};

//type alias
type UserType = {
  userName: string;
  age: number;
  department: string;
  isAdmin: boolean;
  phone?: string;
};
//example of type alias

const betterFunction = (user: UserType): string => {
  return user.userName;
};

const jk: UserType = {
  userName: "jk",
  age: 22,
  department: "cse",
  isAdmin: false,
};
