// Date in Js all calculated by a arbitary date which is Jan 1 1970

let myDate = new Date()
console.log(myDate.toString()); //to string makes it readable
console.log(myDate.toDateString()); 
console.log(myDate.toISOString);
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); //o/p object

let myCreatedDate = new Date(2023, 0, 23 ,5 ,3) //month 0 se start hote hai js mei
//can also represent as YYYY-MM-DD
//in India we prefer as MM-DD-YYYY format
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // can be used to compare two dates

//date ek object hai to get properties use kar sakte hai
console.log(myDate.getMonth());

