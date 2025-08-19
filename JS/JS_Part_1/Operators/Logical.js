//  Logical Operators


let n1 = 10 , n2 = 20 , n3 = 10 ;
let r1 , r2 , r3 , r4 , r5 , r6 , r7 , r8 , r9 , r10 ;
//  n1 = Number-1    ,   n2 = Number-2
//  r1 = Result-1    ,   r2 = Result-2


//  1>
console.log("Case 1")

r1 =  n1 >= n3  &&  n1 == n3        //  T
r2 =  n1 >= n2  &&  n1 == n3        //  F
console.log("\t " + 1 + "> " + " n1 >= n3  &&  n1 == n3     =   " + r1);
console.log("\t " + 2 + "> " + " n1 >= n2  &&  n1 == n3     =   " + r2);


//  2>
console.log("Case 2")

r3 =  n1 >= n3  ||  n1 == n3        //  T
r4 =  n1 >= n2  ||  n1 == n3        //  T
r5 =  n1 >= n2  ||  n1 >  n3        //  F
console.log("\t " + 3 + "> " + " n1 >= n3  ||  n1 == n3     =   " + r3);
console.log("\t " + 4 + "> " + " n1 >= n2  ||  n1 == n3     =   " + r4);
console.log("\t " + 5 + "> " + " n1 >= n2  ||  n1 >  n3     =   " + r5);


//  3>          //  NOT
console.log("Case 3")

r6 =    n1 == n3                    //  T
r7 =  !(n1 == n3)                   //  F
console.log("\t " + 6 + "> " + "   n1 == n3                 =   " + r6);
console.log("\t " + 7 + "> " + " !(n1 == n3)                =   " + r7);


//  4>  
console.log("Case 4")

let  user_is_logged_in          =  true
let  user_purchase_the_course   =  false 
let  course_access

course_access  =   user_is_logged_in   &&    user_purchase_the_course

if(course_access)
{
    console.log("         Welcome to the course .");
}
else
{
    console.log("         Sorry !! You can't access the course .");
}


//  5>  
console.log("Case 5")

course_access  =   user_is_logged_in   ||    user_purchase_the_course

if(course_access)
{
    console.log("         Welcome to the course .");
}
else
{
    console.log("         Sorry !! You can't access the course .");
}


//  6>  
console.log("Case 6")

let  user_has_gmail_account   =  true
let  user_has_mail_id         =   false 
let  user_can_log_in

user_can_log_in  =   user_has_gmail_account   ||    user_has_mail_id

if(user_can_log_in)
{
    console.log("         Welcome  !!  Successfully logged_in .");
}
else
{
    console.log("         Sorry !! Try again !!");
}


//  7>  
console.log("Case 7")


user_can_log_in  =   user_has_gmail_account   &&    user_has_mail_id

if(user_can_log_in)
{
    console.log("         Welcome  !!  Successfully logged_in .");
}
else
{
    console.log("         Sorry !! Try again !!");
}