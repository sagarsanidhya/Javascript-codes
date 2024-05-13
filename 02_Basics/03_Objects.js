// two ways to declare a object 1.Literal, 2.Constructor
//Singleton object with constructor //object.create constructor
//And agar Literals ki tarah declare hoge to aur bhi instances banenge

// object literals
const mySym = Symbol("key1")

const JsUser ={ //declaration of objects
    name: "Rauy", //keys define karne padengi
    "fullname": "Rauy kaun", // we cannot acess this as .fullname
    age: 20,
    [mySym]: "key1",  //agar symbol mei use karna hai to square brackets mei use karna padega
    email: "rauy.com",
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
}

//acessing objects
console.log(JsUser.name); 
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);

JsUser.email = "rauyhen@hotmail.com"//modification of object key

//Object.freeze(JsUser) //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

console.log(JsUser);

JsUser.greeting = function(){ //fuction declaration
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} `);
} //fuction

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());