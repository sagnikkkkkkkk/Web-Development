/*  In case 2 , The output is show like that....... why it is happening ??

Case 2
        g + h  = NaN
        g + h  = NaN
        g + h  = NaN

*/



//  with using function 
//  2>
console.log("Case 2");

let e = 40 , f = 60 ;   // Global variables 

function add () 
{
    console.log("\t" + "e + f  = " + (e+f));
}

add()   // Function calling 
add()
add()   //  **  The main advantage of function is "reusability"  



//  Using parameters and arguments 
//  3>
console.log("Case 3");

function add(g ,h) 
{
    console.log("\t" + "g + h  = " + (g+h));
}
add(50 , 70)        //  Here, 50 and 80 are arguments