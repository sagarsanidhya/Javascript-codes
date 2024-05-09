const name= "Rauy"
const repocount= 9

//console.log(name + repocount + " value"); old method not preferable

console.log(`Hello my name is ${name} and my repocount is ${repocount}`); 
// this thing is known as string interpolation baby

// another way to declare strings

const gameName = new String(`cricket`)

//acessing strings
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // CRICKET
console.log(gameName.charAt(0)); //Kon sa position pe kaun sa character hai
console.log(gameName.indexOf('t')); //kaun sa character kaun se index pe hai

//Dividing into sub strings
const newString = gameName.substring(0,4) //(start number, end Number)
console.log(newString); //4 character aaye end number se ek index takk ki value aayegi last value enter nahi hogi

//slice negative numbers bhi use kar sakte hai
const anotherString = gameName.slice(-2,-1) 
console.log(anotherString); 

//trim string removes extra space
const newStringOne = "  rauy        "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace string replace irrelevant character aur space to chage it to relevant character
const url ="http://rauy.me/rauy%10kaun" //browser space nahi samjhta hai
console.log(url.replace('%10','-'));

//includes helps us to know what present in the string
console.log(url.includes('rauy'));

//split helps us to split the string into different elements of array
console.log(gameName.split(''));