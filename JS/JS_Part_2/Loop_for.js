/*

1>
for (let index = 0 ; index < array.length ; index++) 
{
    const element = array[index];
}


2>
for (Initial expression ; Condition ; Update expression ) 
{
    // body
}


3>
//    let score = 0     // It's Initial expression

*/


// case 1
console.log("Case 1")

for (let index = 0 ; index <= 10 ; index++) 
{
    console.log(index)
}


// case 2
console.log("Case 2")

for (let index = 0 ; index <= 10 ; ) 
{
    index++                     // In that case why 11 is printing , after 10
    console.log(index)
}


// case 3
console.log("Case 3")

for (let index = 0 ; index <= 10 ; index++) 
{
    console.log(index)
    for (let i = 10; i <= 15; i++) {
        console.log(i +".");
    }
}


// case 4
console.log("Case 4")

for (let index = 0 ; index <= 10 ; index++) 
{
    if (index === 4)
        {
            break
    }
            console.log(index);
            
}


// case 5
console.log("Case 5")

for (let index = 0 ; index <= 10 ; index++) 
{
    if (index == 4)
        {
            break
    }
            console.log(index);
            
}


// case 6
console.log("Case 6")

for (let index = 0 ; index <= 10 ; index++) 
{
    if (index === 4)
        {
            console.log(" ")

            //  break                   
            continue                    //  break  vs  continue
    }
            console.log(index);
            
}