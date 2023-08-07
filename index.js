// nested loop = a loop inside another loop 

let rows = window.prompt("enter number of rows");
let columns = window.prompt("enter number of columns");


for (let i = 1; i <= rows; i++) {
   
    for (let j = 1; j <= columns; j++) {
        document.getElementById("myRectangle").innerHTML +=j;
    }
    document.getElementById("myRectangle").innerHTML += "<br>"; 
    
}