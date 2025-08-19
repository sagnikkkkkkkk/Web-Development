//  Bitwise Operator


let a = 10      // Binary = 1010      (32 bits)
let b =  6      // Binary = 0110      (32 bits)
let c =  5      // Binary = 0101      (32 bits)
let d = 20      // Binary = 010100    (32 bits)
let r1 , r2 , r3 , r4 , r5 , r6 , r7 , r8 , r9 , r10 ;
//  r1 = Result-1   ,   r2 = Result-2
let b1 , b2 , b3 , b4 , b5 , b6 , b7 , b8 , b9 , b10 ;
//  b1 = Binary-1   ,   b2 = Binary-2


//  1>
console.log("Case 1")

r1 = a  &  b                                        //  Binary = 0010       //  Decimal = 2
b1 = r1.toString(2)
console.log("\t " + 1 + "> " + " a  &  b     =   " + b1 + " (Binary) " + "       " + r1 + " (Decimal) ");


//  2>
console.log("Case 2")

r2 = a  |  b                                        //  Binary = 1110       //  Decimal = 14
b2 = r2.toString(2)
console.log("\t " + 2 + "> " + " a  |  b     =   " + b2 + " (Binary) " + "     " + r2 + " (Decimal) ");


//  3>      //  ^ = XOR
console.log("Case 3")

r3 = a  ^  b                                        //  Binary = 1100       //  Decimal = 12
b3 = r3.toString(2)
console.log("\t " + 3 + "> " + " a  ^  b     =   " + b3 + " (Binary) " + "     " + r3 + " (Decimal) ");


//  4>      //  ~  = NOT
console.log("Case 4")

r4 =  ~a                                            //  Binary = 11111...0101 (32 bits)       //  Decimal = -11
b4 = r4.toString(2)
console.log("\t " + 4 + "> " + " ~a          =   " + b4 + " (Binary) " + "  " + r4 + " (Decimal) ");


//  5>      //  <<  =  Left Shift  
console.log("Case 5")

r5 =  c << 2                                        //  Binary = 010100 (32 bits)       //  Decimal = 20
b5 = r5.toString(2)
console.log("\t " + 5 + "> " + " c << 2      =   " + b5 + " (Binary) " + "    " + r5 + " (Decimal) ");


//  6>      //  >>  =  Right Shift
console.log("Case 6")

r6 =  d >> 2                                        //  Binary = 0101 (32 bits)       //  Decimal = 5
b6 = r6.toString(2)
console.log("\t " + 6 + "> " + " d >> 2      =   " + b6 + " (Binary) " + "       " + r6 + " (Decimal) ");

