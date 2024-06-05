function sayMyName(){
    console.log("Rauy");
}

sayMyName();
// function calling

function addTwoNumbers(number1, number2){
    //parameters
    console.log(number1 + number2); 
}

addTwoNumbers(3,4) //(arguments)

//----------------------------------------------------------------

function loginUserMessage(username = "sam"){ //default username if  condition is skipped
    if(username === undefined){  //if(!username) , if(undefined)
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rauy"));  

//----------------------------------------------------------------

function calculateCartPrice(val1, val2  ,...num1){ //rest operator gives array of number
        return num1  // 2 index of aaray goes into val1  and val2
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Rauy",
    price: 199
} 

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({ //we can create object on calling 
    username: "sam",
    price: 199
})

const myNewArray = [200, 400, 100, 600]

function return2ndValue(newarray){ //paranmeter passed that function always return 2nd index of any array
  return newarray[1]
}

console.log(return2ndValue(myNewArray)); // argument passed here chooses the array from which we have to find 2nd index value