// Immediately Invoked Function Expression (IIFE)
// function should not be manipulated from global scope hence we use IIFE

(function chai(){
    console.log(`DB connected`);
})(); //IIFE executed --makes function excecute immediately

(function aurcode (){
    console.log(`DB connected 2`);
} )(); //function execution which is wrapped under the paranthesis
//we can provide parameter to this function at the time of execurion also