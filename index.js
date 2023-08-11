// template literals = delimited with(``) 
                        // instead of double or single quotes 
                        // allows embedded variables and expressions


let userName = "Edd";
let items = 3;
let total = 75;

// console.log("hello", userName);
// console.log("you have", items ,"in your cart ");
// console.log("your total is ", total);

// template literals
let text =`hello ${userName}, you have ${items} in your cart. Your total is ${total}`;
console.log(text);
document.getElementById("myLabel").innerHTML = text;

