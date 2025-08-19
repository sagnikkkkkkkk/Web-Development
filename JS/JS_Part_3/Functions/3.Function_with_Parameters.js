//  Function_with_Parameters


//  1>      //  How to pass function with single parameter :-
console.log("Case 1");

function greet1(name1)    // "name" is the "parameter" , which stores the "argument" "Sagnik and Atanu" Separately
{
    console.log("\t" + "Welcome  " + name1);
}
greet1("Sagnik");
greet1("Atanu");


//  2>      //  How to print with The help "$" :-   //  `${....}`
console.log("Case 2");

function greet2(name2)   
{
    //console.log("\t" + "Welcome" + name2   );
      console.log("\t" + `Welcome  ${name2}`  );
}
greet2("Babin");
greet2("Rohit");


//  3>      //  without any argument :-
console.log("Case 3");

function greet3(name3)   
{
    //console.log("\t" + "Welcome" + name3   );
      console.log("\t" + `Welcome  ${name3}`  );
}
greet3("");
greet3();


//  4>      //  Function with default parameter 
console.log("Case 4");

function greet4(name4 = 'Sir')   
{
      console.log("\t" + `Welcome  ${name4}`  );
}
greet4("Sagnik");
greet4();


//  5>      //  Function with Multiple parameters
console.log("Case 5");

function cal_sum1(n1 , n2)          // cal_sum1 = calculate Sum no. 1
{                                   // n1 = number 1
    return n1+n2 ;
}
console.log("\t" + "n1 + n2  = " + cal_sum1(10 , 20));
console.log(cal_sum1(10 , 20));


//  6>          //  Function with Multiple parameters
console.log("Case 6");

function cal_sum2(n1 , n2 , n3 , n4 , n5 , n6)          
{                                                       
    return n1+n2+n3+n4+n5+n6 ;
}
console.log("\t" + "n1 + n2  = " + cal_sum2(10 , 20));
console.log(cal_sum2(10 , 20));
console.log("\t" + "n1 + n2  = " + cal_sum2(10 , 20 , 8 , 2 , 9 , 7));
console.log(cal_sum2(10 , 20 , 8 , 2 , 9 , 7));


//  7>          //  Passing a Array , via "argument" of a function 
console.log("Case 7");

const nums1 = [1,2,3,4,5]
function Print_Arr_Ele_1(arr1)         //  Print_Arr_Ele_1 = Print Array Elements no. 1
{
    console.log("\t" + "Array = " + arr1);
    console.log(arr1);
}
Print_Arr_Ele_1(nums1)


//  8>              //  Passing a Array , via "argument" of a function & use "for loop"  
console.log("Case 8");

const nums2 = [1,2,3]
function Print_Arr_Ele_2(arr2)         //  Print_Arr_Ele_2 = Print Array Elements no. 2
{
    for (let i = 0; i < arr2.length; i++) 
        {
            console.log(arr2[i]);
        }
}
Print_Arr_Ele_2(nums2)


//  9>
console.log("Case 9");

function greet5(name5 , city1) 
{
  //console.log("\t" + " Welcome " + name5 + " from " + city);    
    console.log(`\t Welcome ${name5} from ${city1} `);    
}
greet5("Sagnik" , "Habra")
greet5("Rohit " , "Barasat")


//  10>         //  Special example ** If we interchange the parameter 
console.log("Case 10");         

function greet6(city2 , name6)      // In that case , we must obey the order of parameters  
{                                   // If the order is not Matching , then The output looks weird
    console.log(`\t Welcome ${name6} from ${city2} `);    
}
greet6("Sagnik" , "Habra")


//  11>                 // If you Do not want to maintain the order of parameters 
console.log("Case 11");         // Then We can pass the parameter as an "object" 

function greet7({city3,name7})     // To Destructure The two parameters we Curly braces -> {}  
{                                   
    console.log(`\t Welcome ${name7} from ${city3} `);    
}
greet7({name7 : "Sagnik" , city3 : "Habra"})
// To Destructure The two parameters we Curly braces -> {}


// **
// If you don't know what is the exact number of arguments
// Any number of arguments
// (This type of example is applicable)
//  12>              
console.log("Case 12");         // In this case , we use a new object  
                                // Objcet  ->  "arguments"
function sum_with_arg_1() 
{                           // In that case , we don't use "parameter" 
    console.log(arguments);
}                           // "arguments" is k/a  =>  "Array like structure" 
sum_with_arg_1(1,2,3)
sum_with_arg_1(1,2,3,4,5)
sum_with_arg_1("Sagnik" , "Atanu" , "Babin")
    console.log("\t");


//  13>
console.log("Case 13");

function sum_with_arg_2() 
{
    console.log(arguments);
}                           // what if...? I call the "argument"-object 
sum_with_arg_2(arguments)

// "arguments" is k/a  =>  "Array like structure" 
// "arguments"  !=   Array  
// "arguments"  ==  "Array like structure" 
// **
//  Just because, "arguments" are not "Array" , "arguments" are "Array like structure"
//  So, many of the methods of "Array" , are not available to use in case of "arguments"
    console.log("\t");



//  14>
console.log("Case 14");

function sum_with_arg_3() 
{                           
    console.log("\t" + "Length = " + arguments.length);
    console.log(arguments.length);
}                            
sum_with_arg_3(1,2,3)
sum_with_arg_3(1,2,3,4,5)
    console.log("\t");

 
//  15>     **    
//             "arguments" converted into "arrays"
//  "Array like structure" converted into "arrays"
console.log("Case 15");

function sum_with_arg_4() 
{                           
    const Args_Arr_1 = Array.from(arguments)      // Args_Arr_1 = arguments arrays 1
                                              //  .form()  ==>  method of array
    console.log(Args_Arr_1);                 // in ".form()" we can pass the "arguments"
}                                        // now it's Converted into Array
sum_with_arg_4(1,2,3)
sum_with_arg_4(1,2,3,4,5)
sum_with_arg_4("Sagnik" , "Atanu" , "Babin")
    console.log("\t");


//  16>         // now use  .reduce()  with the same Ex. of Case 15
//  Using arguments object :-
console.log("Case 16");

function sum_with_arg_5() 
{                           
    const Args_Arr_2 = Array.from(arguments)      // Args_Arr_2 = arguments arrays 2
                                            //  .form()  ==> from method ==> method of array
    console.log(Args_Arr_2);             // in ".form()" we can pass the "arguments"
                                        // now it's Converted into Array

          // now use  .reduce()         //  .reduce()  ==>  reduce method
    let sum_1 = Args_Arr_2.reduce(function(acc , curr)  //  acc = Accumulator  , curr = Current 
    {
        return acc+curr
    } , 0)    
    return sum_1          
}                                        
console.log(sum_with_arg_5(1,2,3))
console.log(sum_with_arg_5(1,2,3,4,5))
console.log(sum_with_arg_5(1,2))
console.log(sum_with_arg_5("Sagnik" , "Atanu" , "Babin"))   
    console.log("\t");



//  17>     *****
//             "arguments" converted into "arrays"
//  "Array like structure" converted into "arrays"
//  This is modern method (Case 17) *****
//  Using rest parameters       
//  rest parameters  ==>  (...)
console.log("Case 17");

function sum_with_arg_6(...num) 
{                           
    console.log(num);    
}                                        
console.log(sum_with_arg_6(1,2,3))
console.log(sum_with_arg_6(1,2,3,4,5))
console.log(sum_with_arg_6("Sagnik" , "Atanu" , "Babin"))   
    console.log("\t");


//  18>     *****
//             "arguments" converted into "arrays"
//  "Array like structure" converted into "arrays"
//  This is modern method (Case 18) *****
//  Using rest parameters       
//  rest parameters  ==>  (...)
// now use  .reduce()  with the same Ex. of Case 17
console.log("Case 18");

function sum_with_arg_7(...num) 
{                   
    console.log(num);    

    let sum_2 = num.reduce(function(acc , curr)
    {
        return acc+curr
    } , 0)
    return sum_2
}                                        
console.log(sum_with_arg_7(1,2,3))
console.log(sum_with_arg_7(1,2,3,4,5))
console.log(sum_with_arg_5(1,2))
console.log(sum_with_arg_7("Sagnik" , "Atanu" , "Babin"))   
    console.log("\t");
