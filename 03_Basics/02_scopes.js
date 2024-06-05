// scopes

// let a =10
// const b =20
// var c =30  // global Scope

// if(true) {  //block scope iske andar ka value bahar nahi jayegi
//     let a =100
//     const b =200
//     var c =300 //var declaration of variable is quiet tough because it violates the work of scopes
// }

// console.log(a,b,c);


//------------------------------------------------------------------------------------------------

// function one(){
//     const username = "Rauy"

//     function two(){ //website is called outside the scope
//         const website = "twitter"
//         console.log(username);
//     }
//     //console.log(website);
//     two()
// }
// one()

//------------------------------------------------------------------------------------------------
// Two types two declare functions
function addone (num){
    return num + 1
}

addone(5)

const addTwo = function(num){ // in this case if we call fucntion before declaration it will not return any value
    return num + 2
}

addTwo(5)