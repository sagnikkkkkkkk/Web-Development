//get the output in binary in JavaScript

//Ans:-
//To obtain binary output in JavaScript, primarily when converting a decimal number
// to its binary representation, the toString() method with a radix of 2 is the most
// straightforward approach.

//Ex>
let decimalNumber = 10;
let binaryString = decimalNumber.toString(2);
console.log(binaryString); 
// Output: 101010


//Ex>
//  1>
console.log("Case 1")
let r1 , a=10 , b=6 , b1 ;

r1 = a  &  b        //  Binary = 0010       //  Decimal = 2
b1 = r1.toString(2)
console.log("\t " + 1 + "> " + " a  &  b     =   " + r1 + "" + b1);