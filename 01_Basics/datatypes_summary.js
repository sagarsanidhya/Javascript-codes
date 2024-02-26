//Divided on the basis of how they are stored in the memory and how they can be accessed

// Primitive  / Value type
// These are call by value / Not copied by memory
// 7 categories : string , Number , Boolean , Null , Undefined , symbol ,BigInt

// Non -Primitive / Refrence type
// arrays , Objects, functions

// JS is statically typed or dynamic type?

//Declaration of Non-Primitive Datatypes

const heros = ["shaktimaan","naagraj","doga"] //Array

let myObj ={
    name: "Rauy",
    age: 22,
} //Object

const myFunction = function(){
    console.log("Hello World");
} //Function

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);