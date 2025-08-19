/*
Switch case :-
Syntax :-
            switch (key) 
            {
                case value:
                    break;
                case value:                   
                    break;

                case value:                   
                    break;    

                default:
                    break;
            }
*/


//  case 1

let grade1 = 'B'
console.log("Case 1")


switch (grade1) 
{
    case 'A' :
        console.log("Grade = A")
        break;

    case 'B' :
        console.log("Grade = B")
        break;

    case 'C' :
        console.log("Grade = C")
        break;
        
    case 'D' :
        console.log("Grade = D")
        break;
        
    case 'F' :
        console.log("Grade = F")
        break;

    default:
        console.log("Invalide Grade")
        break;
}

//  case 2
let grade2 = 'J'
console.log("Case 2")

switch (grade2) 
{
    case 'A' :
        console.log("Grade = A")
        break;

    case 'B' :
        console.log("Grade = B")
        break;

    case 'C' :
        console.log("Grade = C")
        break;
        
    case 'D' :
        console.log("Grade = D")
        break;
        
    case 'F' :
        console.log("Grade = F")
        break;

    default:
        console.log("Invalide Grade")
        break;
}


//  case 3

let grade3 = 'B'
console.log("Case 3")

switch (grade3) 
{
    case 'A' :
        console.log("Grade = A")
        break;

    case 'B' :
        console.log("Grade = B")
        //break;

    case 'C' :
        console.log("Grade = C")
        //break;
        
    case 'D' :
        console.log("Grade = D")
        //break;
        
    case 'F' :
        console.log("Grade = F")
        //break;

    default:
        console.log("Invalide Grade")
        break;
}


//  Case 4
console.log("Case 4")

let role = "CEO" , salary = 1000

switch (role) {
    case "employee":
    case "hr":
    case "manager":
        salary += 0.05*salary
    break;

    case "CEO":
    case "CIO":
    case "CTO":
        salary += 0.1*salary        // salary =  salary + (0.1*salary)
    break ;

    default:
        console.log("Umknown Role   !!    I don't your salary ")
    break;
}

console.log(salary)
