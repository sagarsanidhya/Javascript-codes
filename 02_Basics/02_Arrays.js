const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) //array ke andar array aa jayenge
// console.log(marvel_heroes);
// console.log(marvel_heroes.length); //Here length is showing 4 as array of dc hero is consider a single element

// const allHeroes = marvel_heroes.concat(dc_heroes)//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); // spread technique is used here best to merge two arrays together

const another_array = [1,2,3, [4,5,6] , 7 ,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

console.log(Array.isArray("Rauy"));

console.log(Array.from("Rauy")); //Creates an array from an iterable object.
console.log(Array.from({name: "Rauy"})); //return blank

let score1 = 50;
let score2 = 100;
let score3 = 200;

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.