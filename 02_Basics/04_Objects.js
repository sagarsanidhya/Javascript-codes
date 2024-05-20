//const tinderUser = new Object()  //Singleton object 
const tinderUser ={}

tinderUser.name = "Rauy"
tinderUser.id = "123ABD"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularuser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rauy",
            lastname: "kaun"
        }
    }
}

//console.log(regularuser.fullname?.userfullname.firstname); //? gives us option to give fullname when it is present there else not

//combining objects

const obj1 = {1: "a", 2: "b", 3: "c", 4: "d"}

const obj2 = {5: "e", 6: "f", 7: "g", 8: "h"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2) //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
const obj3 = {...obj1, ...obj2} //spread operator is mainly used
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // to check wether the element is present on not