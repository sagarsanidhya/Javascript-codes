const user ={
    username: "rauy",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website `); //current context of variables
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam" // so here, username is changed to sam because of this function , context changed
// user.welcomeMessage()

console.log(this);

//----------------------------------------------------------------  --------------------------------

// function chai(){
//     let username = "rauy"
//     console.log(this.username); // value will give me undefined
// }

// chai();


//----------------------------------------------------------------- =================================

//Arrow functions
// const chai = () => {
//     let username = "rauy"
//     console.log(this.username); // value will give me undefined
// } 
//explicit return

// chai();


const addTwo =(num1, num2) => (num1 + num2) //if we wrap into the curly braces we don't have to worry about return function
//implicit return 
console.log(addTwo(3,4));