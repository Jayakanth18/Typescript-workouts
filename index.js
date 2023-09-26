"use strict";
const myName = "Jayakanth";
//any
let newData; //by default if the the variable is not initialized it asigned to any type.
// number array
const numArray = [1, 3, 5, 7, 9];
//string array
const stringArray = ["milk", "bread", "cookies"];
//tuple
const userData = ["jayakanth", 22];
//named tuple
const userData2 = ["hari", 24];
//functions
const calculateAge = (birthYear) => {
    return new Date().getFullYear() - birthYear;
};

console.log(calculateAge(2001))
