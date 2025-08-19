console.log("\n")


//1
let is_User1_Logged_in = true

if(is_User1_Logged_in)
    {
        console.log("\n When 'is_User1_Logged_in = true' then --> " +" Welcome to the Website . \n")
    }
else
    {
        console.log("\n When 'is_User1_Logged_in = false' then --> " +"Ooopps !! You failed to login !! Please login !! \n")
    }



//2
let is_User2_Logged_in = false

if(is_User2_Logged_in)
    {
        console.log("\n When 'is_User1_Logged_in = true' then --> " +"Welcome to the Website \n")
    }
else
    {
        console.log("\n When 'is_User1_Logged_in = false' then --> " +"Ooopps !! You failed to login !! Please login !! \n")
    }


/*
    Terminary operator :- 
    Syntax :-
                1>  ( Condition ) ? ( Result-1 ) : ( Result-2 ) 
                                     (if true)     (if false)                    
*/



//3

let is_User3_Logged_in = true

is_User3_Logged_in ? console.log("Welcome to the Website") : 
console.log("Ooopps !! You failed to login !! Please login !!") 



//4

let is_User4_Logged_in = false

is_User4_Logged_in ? console.log("Welcome to the Website") : 
console.log("Ooopps !! You failed to login !! Please login !!") 


//5

let a = 10 , b = 14 , c = 54 ;

//  a>
a<b ? console.log("b "+b) : console.log("a "+a)

//  b>
a>b ? console.log("a "+a) : console.log("b "+b)

//  c>
a>b ? 
( (a>c) ? (console.log("a "+a)) : (console.log("c "+c)) ) : 
( (b>c) ? (console.log("b "+b)) : (console.log("c "+c)) )


//6

let is_The_User_Logged_in = false
let is_The_Course_Purchased = true

is_The_User_Logged_in ?
( is_The_Course_Purchased
    ?   console.log("Access Granted")
    :   console.log("Access Denied !! Please buy the course .") ) :
( console.log("Access Denied !! Please login .") )
