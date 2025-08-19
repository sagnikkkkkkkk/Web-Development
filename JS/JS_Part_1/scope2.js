//a> Global Scope


//  Ex-1>
console.log("Case 1")

let global_var = 10 
console.log(global_var)

function xyz()
{
    let global_var = 99
    let value = 3
    console.log(global_var)
    console.log(value)
}

xyz()
console.log(global_var)
// console.log(value) ->  this is not printed here because The variable "value" is declared into the "function xyz()"
// console.log(value) ->  This is not printed outside the "function xyz()"



//  Ex-2>
console.log("Case 2")

if(true)
{
    let y = 20          // 'y' = Local variable 
    console.log("y")    // 'y' does not print outside the " if() {....} "-block 
}                       // We can print the 'y' in to the " if() {....} "-block



//  That is who Import_Export happend in HTML( .html ) 
{/* <script type="module" src="" ></script> */}
// it Applied on html file (.html) , not in core javascript file (.js) 
