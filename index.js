
// switch statement
// switch = statement that examines a value for a match against many clauses.
// more efficient than many "else if" statements
let grade;

    grade = window.prompt("Enter your score");
   
    grade = Number(grade);

    console.log(grade);

    switch (true) {
        case grade >= 90:
            console.log("you did great.You gogt an A");
            break;

            case grade >= 70:
                console.log("you got a B");
                break;
            
        case grade >= 50:
            console.log("You got a C");     
            break;
            
        case grade >= 40:
            console.log("You got a D");
            break;
    
        default:
            console.log("you did not do an exam")
            break;
    }

 

