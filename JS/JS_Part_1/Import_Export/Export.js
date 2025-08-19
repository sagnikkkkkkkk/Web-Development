//  Export 


//  case 1>

var mod_var = 12 ;          //  mod_var = module_variable

function mod_func ()       //  mod_func = module_function  
{
    console.log(mod_var);
    console.log("Hello from Import_Export_1");
}

// This is the syntax of "Export" in javascript (Which is Basically run in common.js)
module.exports = {mod_var , mod_func} 


//  case 2>

var mod_var = 12 ;          //  mod_var = module_variable

export function mod_func ()       //  mod_func = module_function  
{
    console.log(mod_var);
    console.log("Hello from Import_Export_1");
}

// This is the syntax of "Export" in javascript (Which is Basically run in common.js)
//module.exports = {mod_var , mod_func} 


/*
//  case 3>

var mod_var_2 = 20 ;          //  mod_var = module_variable

function mod_func_2 ()       //  mod_func = module_function  
{
    console.log("Hello from Export");
}

// This is the syntax of "Export" in javascript (Which is Basically run in common.js)
module.exports = {mod_var_2 , mod_func_2} 
*/
