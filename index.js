 let username;
 
 document.getElementById("myButton").onclick = () => {
    username = document.getElementById("myText").value;
    console.log(username); 

     document.getElementById("myLabel").innerHTML = "Hello "+username;
    

 } 