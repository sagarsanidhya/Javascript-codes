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

// ----------------------------------------

// Two types of memory 
// stack and Heap Memory

// stack(primitive), heap memory(Non-primitive)

let  myYoutubename = "Rauy"

let anothername = myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename);

console.log(anothername);

//let leke anothername jab declare hua to uska copy aagya myyoutube name ka, naki real data hence
// karke check kar sakte hai.  hence primitive data type.

//But in case of heap memory copy nahi refrence jayega for example

let userone ={
    email: "userone@gmail.com",
    upi: "upi@ybl",
}

let usertwo = userone

usertwo.email = "usertwo@gmail.com"

console.log(userone.email);
console.log(usertwo.email);