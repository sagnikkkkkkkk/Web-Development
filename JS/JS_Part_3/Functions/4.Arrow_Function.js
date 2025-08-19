//  Arrow Functions
//  Q. Features of Arrow Functions (Theoretical part) 
//  Q. Limitations of Arrow Functions (Theoretical part) 
//  Q. Regular function  vs  Arrow function (Theoretical part)


//  1>
console.log("Case 1");

function add_1(a,b)         //  add_1  ==>  Identifier 
{
    console.log("\t" + "a + b  = " + (a+b));
    console.log(a+b);

    return a+b
}
add_1(10,20)
console.log("\t");


//  2>          // Same code as case-1 , but in different way of printing 
console.log("Case 2");

function add_2(c,d)         //  add_2  ==>  Identifier 
{
    return c+d
}
console.log("\t" + "c + d  =  " + (add_2(11,22)))
console.log(add_2(11,22))
console.log("\t");


//  3>      //  Same code as case-2 , ** Using arrow function 
console.log("Case 3");          
                                //  arrow function is "=>"
let add_3 = (e,f) =>
{
    return e+f                  //  Explicit return
}
console.log("\t" + "e + f  =  " + (add_3(5,15)));
console.log(add_3(5,15));
console.log("\t");


//  4>
console.log("Case 4");

let add_4 = (g,h) => g+h        //  Implicit return
                                // Also called "Lambda function" 
console.log("\t" + "g + h  =  " + (add_4(22 , 33)));
console.log(add_4(22 , 33));
console.log("\t");


//  5>          //  If we have only one parameter 
console.log("Case 5");
                //  If we have only one parameter we don't even use "parentheses/1st bracket" 
let print_num_1 = i => console.log(i);

console.log(print_num_1(100));      // Because we use "console.log" 2-times 
                                    // That's why , "undefined" is shown in the output 
console.log("\t");


//  6>          //  If we have only one parameter 
console.log("Case 6");
let print_num_2 = j => console.log(j);

print_num_2("\t" + "j  =  " + 100);        
print_num_2(100);        
                                    
console.log("\t");


//  Q. Regular function  vs  Arrow function (Theoretical part)
//  i>      syntax
//  ii>     argumentes
//  iii>    "Binding of this"  or  "this Binding" 
//  iv>     we can't use "new" Keyboard with Arrow function
//  v>      For arrow function sometimes it complicated to debug , Because arrow function doesn't have any identifier

//  Ex> is shown from  Case 7  to  Case 11


//  7>          
console.log("Case 7");

function add_5() 
{
    console.log(arguments);
}
add_5(10,20,30,40,50)
console.log("\t");


//  8>
console.log("Case 8");

function add_6() 
{
    console.log(arguments);
}
let add_7 = () => console.log(arguments);

add_6(10,20,30,40,50)
add_7(10,20,30,40,50)   // output of add_7(10,20,30,40,50) is Weird -->   // why ??

console.log("\t");
//  In that case (case 8) , Javascript gives error , Because as per ruls
//  We do not use arguments (arguments object) in the arrow function
//  To see the error , we must create a  .html  file  &  Open it into live server
//  then Right click  &  Click on "inspect"  &  then Open console  &  Click on "info" & "errors"
//  To see Actually what is the error


//  9>          //  "Binding of this"  or  "this Binding"
console.log("Case 9");

const person_1 = {
    name_1 : 'Sagnik' ,             //  If there is a function() , in-side an object
    greet_1 : function()            //  Then it is known as = method()
    {                                
        console.log(`Hi , My name is ${this.name_1}`)       //  Normal function 
    } ,
    greet_2 : () =>                                         //  Arrow function
    {                       
        console.log(`Hi , My name is ${this.name_1}`)
    }
}
//  The Execution of "this" Keyword is Different , for Different "Function calling" 
person_1.greet_1()      
//  For "Normal function" , "this" Keyword point outs the Object(Ex> person_1) before dot(.)
//  So , For this case the result is = "Sagnik"
person_1.greet_2()      
//  For "Arrow function" , arrow function does not have "this"-function
//  Arrow function "lexically" have it's "this"-function
//  "Lexically" means ==> From its parent , Where the "this" Keyword is defined 

console.log("\t");


//  10>
console.log("Case 10");

const person_2 = {
    name_2 : 'Atanu' ,             
    greet_3 : function()            
    {                  
        console.log('greet_3' , this);
        console.log(`Hi , My name is ${this.name_2}`)       //  Normal function 
    } ,
    greet_4 : () =>                                         //  Arrow function
    {                     
        console.log('greet_4' , this);
        console.log(`Hi , My name is ${this.name_2}`)
    }
}
person_2.greet_3()    
//  For "Normal function" , "this" Keyword point outs the Object(Ex> person_1) before dot(.)
person_2.greet_4()  
//  For "Arrow function" , arrow function does not have "this"-function
//  Arrow function "lexically" have it's "this"-function
//  "Lexically" means ==> From its parent , Where the "this" Keyword is defined
//  "parent" maens "Global scope" 
//   &  "this" Keyword is present in "global scope"
//   &   In "global scope" , "this" Keyword always points-to the "window" object 
//   this === window  -->  true     
//  ( .html file -> right click -> Live-server -> inspect -> console -> info )
console.log("\t");


//  11>                     //  we can't use "new" Keyboard with Arrow function
console.log("Case 11");     //  We can use "new" keyword to "Create object" 

function Regular_function(name_3)   // Regular_function = identifier    &    name_3 = parameter
{                                       //  ai jaga ta bujlam na ???!!!  ->  atanu help !!
    this.name_3 = name_3        //  the parameter "name_3" is saved in "this.name_3"      
}
//  We can use "Regular_function"(identifier) as "Construct" 
//  To use it as a "Construct" , we apply the "new" keyword before "Regular_function"(identifier)
//  &   in the peninsist() , we inject the input , in between single inverted comma or double inverted comma
const regular_Obj = new Regular_function('Sagnik')
console.log(regular_Obj);

/*
        const Arrow_function = (name_4) => {
            this.name_4 = name_4                        //  it gives error  !!
        }
        const arrow_Obj = new Arrow_function('Atanu')
        console.log(arrow_Obj);
*/
//  we can't use "new" Keyboard with Arrow function
//  Arrow function is not a constructor 
console.log("\t");

//  Arrow function doesn't have any identifier
//  So , sometimes it complicated to debug , for arrow functions


