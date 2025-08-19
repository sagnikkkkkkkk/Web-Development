/*  Syntax :-    if(){
                        }
*/



//  1
console.log("\n It's Case 1 \n")
let dividend1 = 10 ;
let divisor1 = 5 ;
if(divisor1 != 0)
    {
        let result1 = dividend1 / divisor1 ;      //  10 / 5 = 2
        let result2 = dividend1 % divisor1 ;      //  10 % 5 = 0

        console.log("10 / 5 = " +result1)         //  10 / 5 = 2
        console.log("10 % 5 = " +result2)         //  10 % 5 = 0
    }
else 
    {
        console.log("Error ! Your Divisor is Zero .")
    }



//  2
//console.log("\n It's Case 2 \n")
// let dividend2 = 10 ;
// let divisor2 = 0 ;
// if(divisor2 == 0)
//     {
//         let result3 = dividend2 / divisor2 ;      //  10 / 0 = Infinity
//         let result4 = dividend2 % divisor2 ;      //  10 % 0 = NaN

//         console.log("10 / 0 = " + result3)         //  10 / 0 = Infinity
//         console.log("10 % 0 = " + result4)         //  10 % 0 = NaN
//     }
// else 
//     {
//         console.log("Error ! Your Divisor is Zero .")
//     }



//  3
console.log("\n It's Case 3 \n")         
let dividend3 = 10 ;
let divisor3 = 0 ;
if(divisor3 != 0)
    {
        let result5 = dividend3 / divisor3 ;      //  10 / 0 = Infinity
        let result6 = dividend3 % divisor3 ;      //  10 % 0 = NaN

        console.log("10 / 0 = " + result5)         //  10 / 0 = Infinity
        console.log("10 % 0 = " + result6)         //  10 % 0 = NaN
    }
else 
    {
        console.log("Error ! Your Divisor is Zero .\n")
    }



//  4
console.log("\n It's Case 4 \n")         
let age1 = 25

if(age1 >= 18)
    {
        console.log("Eligible \n")
    }
else
    {
        console.log("Not Eligible \n")
    }



// 5
console.log("\n It's Case 5 \n")         
let age2 = 15

if(age2 >= 18)
    {
        console.log("Eligible \n")
    }
else
    {
        console.log("Not Eligible \n")
    }



// 6
console.log("\n It's Case 6 \n")
let isAdmin = false

if(isAdmin)
    {
        console.log(" Getting Admin details \n ")
    }
else
    {
        console.log(" Getting User details \n ")
    }

    

// 7
// Nested if-else
console.log("\n It's Case 7 \n")

let a = 10 , b = 14 , c = 54 ;

if(a>b)
    {
        if(a>c)
            {
                console.log(" 'a' is greatest \n")
            }
        else
            {
                console.log(" 'c' is greatest \n")
            }
    }
else
    {
        if(b>c)
            {
                console.log(" 'b' is greatest \n")
            }
        else
            {
                console.log(" 'c' is greatest \n")
            }
    }

