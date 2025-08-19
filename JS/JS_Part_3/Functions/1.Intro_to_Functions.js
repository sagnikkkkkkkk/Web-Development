//  Introduction to Functions


//  without using function 
//  1>
console.log("Case 1");

let a = 10 , b = 20 ;
let c = 30 , d = 40 ;
console.log("\t" + "a + b  = " + (a+b)) ;
console.log("\t" + "c + d  = " + (c+d)) ;


//  Syntax of Function :-
//                            function name_of_function (parameters) 
//                            {
//                                // Body
//                            }



//  with using function 
//  2>
console.log("Case 2");

let e = 40 , f = 60 ;   // Global variables 

function add1 () 
{
    console.log("\t" + "e + f  = " + (e+f));
}

add1()   // Function calling 
add1()
add1()   //  **  The main advantage of function is "reusability"  


//  Using parameters and arguments 
//  3>
console.log("Case 3");

// Function declaration 
function add2(g , h)    // **  Here, g  &  h are Parameters
{
    console.log(g+h);
    console.log("\t" + "g + h  = " + (g+h));
}
add2(50 , 70)           // **  Here, 50 & 80 are Arguments
add2(11 , 22)           // **  Here, 11 & 22 are Arguments
//  Now, the code is much more Reusable that ,
//  we can use the same Parameter  g  &  h  with new values(Arguments)
//  & By calling the function again and again ,
//  With different arguments , The output is also different



//  Imp.**
//  **  Functions  are  "first class citizens"
//  That means functions are very powerful in the javascript 


//  4>
console.log("Case 4");

let sum1 = function add3(i , j)    // **  Here, i  &  j are Parameters
            {
                console.log("\t" + "i + j  = " + (i+j));
                console.log(i+j);
            }
console.log(sum1);


//  5>
console.log("Case 5");          //  why ??

console.log("\t" + sum1);

//  6>
console.log("Case 6");          

console.log(sum1);

//  7>
console.log("Case 7");

console.log(sum1());                //  Why undefined is shown there ??

//  8>
console.log("Case 8");

console.log(sum1(22 , 33));         //  Why undefined is shown there ??


//  callback a function , from another function
//  9>
console.log("Case 9");

function x(call_back) 
{
    console.log("\t" + "Hii");
    call_back()
}

function y() 
{
    console.log("\t" + "Bye");
}

x(y)


//  returning the function , into another function 
//  10>
console.log("Case 10");

function add4(k,l) 
{
    return function sum2()          //  I don't know how to resolve this case-10 !!
    {                               //  Please Help !!
        console.log(k+l);
        sum2()
        console.log(sum2());
    }   
}
add4()


//  11>
console.log("Case 11");

function add5(m,n)    // **  Here, m  &  n are Parameters
{
    return m+n ;
}
let sum3 = add5(60 , 80)        //Function Calling          // **  Here, 60 & 80 are Arguments
let sum4 = add5(33 , 55)        //Function Calling
console.log(sum3);
console.log(sum4);


//  12>
console.log("Case 12");

function add6(o,p)    
{
    return o+p ;

    console.log("hii");     //  **  After the return statement No code is executed  **
    console.log(1000);
}
let sum5 = add5(6 , 8)                  
let sum6 = add5(3 , 5)        
console.log(sum5);
console.log(sum6);