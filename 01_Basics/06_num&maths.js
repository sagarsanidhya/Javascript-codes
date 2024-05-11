const score = 400
console.log(score);
//Here datatype is already defined as number

const balance = new Number(100) //data type declared
console.log(balance);
//here datatype is also been shown in console

console.log(balance.toString);
//ab string properties bhi use kar sakte hai

console.log(balance.toFixed(2));
console.log(balance.toFixed(3));
console.log(balance.toFixed(4));
console.log(balance.toFixed(5));
console.log(balance.toFixed(6));
//precision value nahi deke to fixed use hota hai ki do point ke baad ya jitne bhi point ke baad 

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));
//precise value chahiye to kitne element aayenge priority decimal ke pehle milenge

const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN'));
//commas ko lga deti hai large number pe readable bnane ke liye
//en-IN use to enter commas in indian format.

//For max and min value
Number.MAX_VALUE
Number.isSafeInteger
//and many more

//----------------------------------------------------------------

//  MATHS- By default librabry

console.log(Math);
//for more properties use console in browser

//absolute value
console.log(Math.abs(-4));

//Round off to nearest values
console.log(Math.round(4.6));
console.log(Math.ceil(4.5)); //round off to upper value
console.log(Math.floor(4.5));// rpund off to floor value

console.log(Math.max(1,2,3,4,5,6,7,8,9));
console.log(Math.min(1,2,3,4,5,6,7,));

//random value 0-1 range
console.log(Math.random());
console.log((Math.random()*10) +1); //to shift decimal and avoid zero 
console.log(Math.floor(Math.random()*10)+1);//to have a proper value
//range is parameterized
const min= 10
const max= 100

console.log(Math.floor(Math.random() *(max-min + 1)) + min);