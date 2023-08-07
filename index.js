// do while loop = do something ,
                // then check the condition, reoeat if the condition is true
                 
let userName;


    do {
        userName = window.prompt("enter your name ");
       
    } while (userName == "" || userName == null);

   
    console.log("Hello", userName);
