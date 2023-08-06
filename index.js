
// radio buttons 
 document.getElementById("myButton").onclick = function(){
    
    const visa =  document.getElementById("visa");
    const mastercard = document.getElementById("mastercard");
    const paypal = document.getElementById("paypal");

   if (visa.checked=== true) {
    alert("you are paying with visa");
    
   } else if(mastercard.checked){
    alert("You are paying with mastercard");
    } else if(paypal.checked){
        alert("you are paying with paypal");
    } else{
        alert("select payment method");
    }
     
 }
 

