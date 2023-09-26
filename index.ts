const myName: string = "Jayakanth";

//any
let newData; //by default if the the variable is not initialized it asigned to any type.

// number array
const numArray: number[] = [1, 3, 5, 7, 9];
//string array
const stringArray: string[] = ["milk", "bread", "cookies"];

//tuple
const userData: [string, number] = ["jayakanth", 22];
//named tuple
const userData2: [name: string, age: number] = ["hari", 24];

//functions
const calculateAge = (birthYear: number): number => {
  return new Date().getFullYear() - birthYear;
};
