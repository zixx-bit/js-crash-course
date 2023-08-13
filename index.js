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



   document.getElementById("tempButton").onclick = function () {
   
    let temp;

    if (document.getElementById("cButton").checked === true) 
    {
         temp = document.getElementById("textbox").value;   
        temp = Number(temp);  
        temp = toCelcius()
        document.getElementById("fButton").innerHTML = temp + "C";

    } else if(document.getElementById("fButton").checked === true) 
    {
         temp = document.getElementById("textbox").value;   
        temp = Number(temp);  
        temp = toFarenHeight()
        document.getElementById("fButton").innerHTML = temp +"F";
     
    } else{
        document.getElementById("fButton").innerHTML = "Select a unit"

    }   
    
}

   function toCelcius(){
     return (temp - 32)* (5/9);
   }

   function toFarenHeight(){
       return temp   * 9/5 + 32 ;
   }

    
    

