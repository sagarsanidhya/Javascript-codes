// Let const var

const accountId =123456   //Unchangable Value
let accountEmail ="brawlvella@gmail.com"
var accountPassword = "124@34"
accountCity ="patna" //don't use this method but it is possible to declare without keyword
let accountstate

// accountId= 2 //const change not allowed

accountEmail ="justtroolssp@gmail.com"
accountPassword="456716"
accountCity ="Varanasi"

console.log(accountId);

/* 
prefer not to use 'var' beacuse of issue in block scope and fuctional scope
 */
console.table([accountId, accountEmail, accountPassword ,accountCity, accountstate]) //print in a tabular form

