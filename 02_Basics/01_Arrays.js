// Arrays are used to represnt multiple elements in a single variable

const myArr = [1, 2, 3, 4, 5, 6, 7] // elements of array
// Arrays in JS are resizable
const myHeroes =["heroes", "rauy"]

console.log(myArr[0]); // calling a index value
//Jab bhi copy karte hai elements array mei shallow copy create hoti hai

//Shallow copy of an object where propeties share the same reference point
//Deep copy of an object where propeties do not share the same reference point

console.log(myHeroes.length); // print the length 

myArr.push(8) //push element at the last of array
console.log(myArr);

myArr.pop(); //removes last element of array

myArr.unshift(8);  //put value at the start of the array
console.log(myArr);

myArr.shift(); //remove the unshifted element at the start of the array
console.log(myArr);

console.log(myArr.includes(9)); // boolean question is given element present inside the array or not
console.log(myArr.indexOf(9)); //to find index of a element in the array
//if given -1 it means element is not present in the array

const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newArr);



// slice---splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3) //Returns a copy of a section of an array. For both start and end

console.log(myn1);
console.log("B", myArr);

console.log("A", myArr);
const myn2 = myArr.splice(1,3) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(myn2);
console.log("C", myArr);